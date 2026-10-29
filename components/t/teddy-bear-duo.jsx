import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d-prlc24s.css';
import '../../css/u/ukswfvb9b.css';
import '../../css/r/rz80qw0kw.css';
import '../../css/u/u90yf2b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d-prlc24s"/><path class="ukswfvb9b"/><path class="rz80qw0kw wm-a"/><path class="u90yf2b5z"/></g>`,
		"fallback": "withicons:teddy-bear-duo",
	});
}

export default Component;
