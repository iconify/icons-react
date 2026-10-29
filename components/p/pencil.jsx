import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lqpi8na-k.css';
import '../../css/j/jm-o6kx0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lqpi8na-k"/><path class="jm-o6kx0w wm-a"/></g>`,
		"fallback": "withicons:pencil",
	});
}

export default Component;
