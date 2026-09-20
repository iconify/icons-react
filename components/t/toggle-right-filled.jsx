import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/almv6ub9v.css';
import '../../css/e/el0g6e8eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="almv6ub9v"/><path class="el0g6e8eh"/></g>`,
		"fallback": "tabler:toggle-right-filled",
	});
}

export default Component;
