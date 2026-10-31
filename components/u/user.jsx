import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kiajoqb0e.css';
import '../../css/n/nu71q2bve.css';
import '../../css/z/zu45yfb2g.css';
import '../../css/z/zbjlsgbtl.css';
import '../../css/s/s6yvuq4-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kiajoqb0e wm-shadow"/><path class="nu71q2bve"/><path class="zu45yfb2g"/><path class="zbjlsgbtl"/><path class="s6yvuq4-m"/></g>`,
		"fallback": "withicons-retro:user",
	});
}

export default Component;
