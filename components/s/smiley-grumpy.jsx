import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4lpi34fc.css';
import '../../css/y/ybunk6bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4lpi34fc"/><path class="ybunk6bqf"/></g>`,
		"fallback": "streamline-freehand-color:smiley-grumpy",
	});
}

export default Component;
