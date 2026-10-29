import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jaoc7wa3q.css';
import '../../css/d/d0rm88b6m.css';
import '../../css/z/zo3y1ub3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jaoc7wa3q"/><path class="d0rm88b6m wm-a"/><path class="zo3y1ub3k"/></g>`,
		"fallback": "withicons:traffic-cone-duo",
	});
}

export default Component;
