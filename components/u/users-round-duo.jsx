import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o9p57-x7x.css';
import '../../css/l/ldmenhbkx.css';
import '../../css/c/c-t_59bnx.css';
import '../../css/t/t_g_x1biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o9p57-x7x"/><path class="ldmenhbkx wm-a"/><path class="c-t_59bnx wm-a"/><path class="t_g_x1biv"/></g>`,
		"fallback": "withicons:users-round-duo",
	});
}

export default Component;
