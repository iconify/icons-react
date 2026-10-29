import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iyexf9bri.css';
import '../../css/y/y2dq4-b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="iyexf9bri"/><path class="wm-a y2dq4-b3s"/></g>`,
		"fallback": "withicons:ship",
	});
}

export default Component;
