import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/facdfwb9y.css';
import '../../css/n/n__4bc2mm.css';
import '../../css/k/kvny8wo_h.css';
import '../../css/w/w8zqb6bvh.css';
import '../../css/f/fup5jlbuo.css';
import '../../css/r/r1z-ibbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="facdfwb9y wm-shadow"/><path class="n__4bc2mm"/><path class="kvny8wo_h"/><path class="w8zqb6bvh"/><path class="fup5jlbuo"/><path class="r1z-ibbuw"/></g>`,
		"fallback": "withicons-retro:tag",
	});
}

export default Component;
