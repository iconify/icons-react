import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xwjmyop7m.css';
import '../../css/k/kg840zb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xwjmyop7m"/><path class="kg840zb-d"/></g>`,
		"fallback": "withicons-retro:sliders",
	});
}

export default Component;
