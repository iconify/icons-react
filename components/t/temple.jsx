import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inu_54xqt.css';
import '../../css/k/kj092dbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="inu_54xqt"/><path class="kj092dbvr"/></g>`,
		"fallback": "tdesign:temple",
	});
}

export default Component;
