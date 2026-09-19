import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nw7rk_lec.css';
import '../../css/r/rkats6bfp.css';
import '../../css/c/c-wu24bqc.css';
import '../../css/o/ocyyo8bxi.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="nw7rk_lec"/><path class="rkats6bfp"/><path class="c-wu24bqc"/><path class="ocyyo8bxi"/></g>`,
		"fallback": "cif:ls",
	});
}

export default Component;
