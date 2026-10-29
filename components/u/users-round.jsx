import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t_g_x1biv.css';
import '../../css/c/c-t_59bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t_g_x1biv"/><path class="c-t_59bnx wm-a"/></g>`,
		"fallback": "withicons:users-round",
	});
}

export default Component;
