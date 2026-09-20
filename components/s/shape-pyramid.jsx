import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ksf5z8bnm.css';
import '../../css/q/q1lezmisr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ksf5z8bnm"/><path class="q1lezmisr"/></g>`,
		"fallback": "streamline-freehand-color:shape-pyramid",
	});
}

export default Component;
