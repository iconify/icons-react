import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vera43bet.css';
import '../../css/r/rory8nrrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vera43bet"/><path class="rory8nrrb"/></g>`,
		"fallback": "withicons-retro:strikethrough",
	});
}

export default Component;
