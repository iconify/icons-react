import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_uhguflm.css';
import '../../css/j/j9q1pxk4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="j_uhguflm"/><path class="j9q1pxk4e"/></g>`,
		"fallback": "cryptocurrency-color:qiwi",
	});
}

export default Component;
