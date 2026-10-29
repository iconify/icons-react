import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ix49qzbxz.css';
import '../../css/j/jm-o6kx0w.css';
import '../../css/l/lqpi8na-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ix49qzbxz"/><path class="jm-o6kx0w wm-a"/><path class="lqpi8na-k"/></g>`,
		"fallback": "withicons:pencil-duo",
	});
}

export default Component;
