import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uf0749bhz.css';
import '../../css/r/rghyg8bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uf0749bhz"/><path class="rghyg8bfs"/></g>`,
		"fallback": "withicons-retro:pound-sterling",
	});
}

export default Component;
