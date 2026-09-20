import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ax0f-l0gx.css';
import '../../css/e/e08fg5bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ax0f-l0gx"/><path class="e08fg5bcm"/></g>`,
		"fallback": "streamline-freehand-color:vectors-pen-draw",
	});
}

export default Component;
