import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhzve447b.css';
import '../../css/p/pyea2bbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yhzve447b"/><path class="pyea2bbzx"/></g>`,
		"fallback": "tdesign:mode-light",
	});
}

export default Component;
