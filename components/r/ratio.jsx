import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ammxg4bjk.css';
import '../../css/u/u_b68ubpu.css';
import '../../css/s/sbwgwr0cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ammxg4bjk"/><path class="u_b68ubpu"/><path class="sbwgwr0cg"/></g>`,
		"fallback": "iconaut:ratio",
	});
}

export default Component;
