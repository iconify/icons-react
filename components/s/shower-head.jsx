import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sx38bxbwl.css';
import '../../css/a/a1x9fccec.css';
import '../../css/w/w4ma32w-d.css';
import '../../css/s/sarsgdhob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sx38bxbwl wm-shadow"/><path class="a1x9fccec"/><path class="w4ma32w-d"/><path class="sarsgdhob wm-s"/></g>`,
		"fallback": "withicons-retro:shower-head",
	});
}

export default Component;
