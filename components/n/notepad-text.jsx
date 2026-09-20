import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jg-zpwbgb.css';
import '../../css/j/j-vfontrd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jg-zpwbgb"/><path class="j-vfontrd"/></g>`,
		"fallback": "streamline-flex-color:notepad-text",
	});
}

export default Component;
