import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/k/kriq1cbqb.css';
import '../../css/w/w2lx9vbth.css';
import '../../css/s/shsacib_y.css';
import '../../css/g/gd1_dnznc.css';
import '../../css/x/x5-8j5bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="kriq1cbqb"/><path class="w2lx9vbth"/><path class="shsacib_y"/><path class="gd1_dnznc"/><path class="x5-8j5bcb"/></g>`,
		"fallback": "withicons-retro:square-minus",
	});
}

export default Component;
