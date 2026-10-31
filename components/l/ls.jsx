import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gcn8wsjcn.css';
import '../../css/r/rkats6bfp.css';
import '../../css/i/ieyfkloei.css';
import '../../css/o/ocyyo8bxi.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="gcn8wsjcn"/><path class="rkats6bfp"/><path class="ieyfkloei"/><path class="ocyyo8bxi"/></g>`,
		"fallback": "cif:ls",
	});
}

export default Component;
