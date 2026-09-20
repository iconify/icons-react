import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5fkry6lc.css';
import '../../css/j/j86n7a-xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5fkry6lc"/><path class="j86n7a-xk"/></g>`,
		"fallback": "streamline-freehand-color:smartphone-app-widget-add",
	});
}

export default Component;
