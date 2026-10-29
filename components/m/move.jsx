import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u1of9ltii.css';
import '../../css/n/ngurz8bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u1of9ltii"/><path class="ngurz8bhm wm-a"/></g>`,
		"fallback": "withicons:move",
	});
}

export default Component;
