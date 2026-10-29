import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z3fy_envj.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/t/ty9mbdqxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z3fy_envj"/><path class="wm-a wp31-1bdq"/><path class="ty9mbdqxq"/></g>`,
		"fallback": "withicons:paste",
	});
}

export default Component;
