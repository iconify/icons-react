import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/othzqd4mm.css';
import '../../css/w/wov7lk_7m.css';
import '../../css/i/i3aui9_dk.css';
import '../../css/c/c_l0q_b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="othzqd4mm wm-shadow"/><path class="wov7lk_7m"/><path class="i3aui9_dk"/><path class="c_l0q_b-k"/></g>`,
		"fallback": "withicons-retro:route",
	});
}

export default Component;
