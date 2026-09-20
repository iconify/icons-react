import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npm0a9b3d.css';
import '../../css/e/eo4dq_bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="npm0a9b3d"/><path class="eo4dq_bdk"/></g>`,
		"fallback": "streamline-freehand-color:messages-bubble-smile",
	});
}

export default Component;
