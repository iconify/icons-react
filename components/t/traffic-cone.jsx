import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zo3y1ub3k.css';
import '../../css/d/d0rm88b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zo3y1ub3k"/><path class="d0rm88b6m wm-a"/></g>`,
		"fallback": "withicons:traffic-cone",
	});
}

export default Component;
