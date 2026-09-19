import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swc8jgy9d.css';
import '../../css/v/vf1mnpjly.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="swc8jgy9d"/><path class="vf1mnpjly"/></g>`,
		"fallback": "cryptocurrency-color:sub",
	});
}

export default Component;
