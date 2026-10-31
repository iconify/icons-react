import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rjdjdsbeb.css';
import '../../css/t/t0q_83c6j.css';
import '../../css/z/zc3j4ib-b.css';
import '../../css/t/t4lgz4b7g.css';
import '../../css/f/f0um2hv-r.css';
import '../../css/f/fn8qddybi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rjdjdsbeb wm-shadow"/><path class="t0q_83c6j"/><path class="zc3j4ib-b"/><path class="t4lgz4b7g"/><path class="f0um2hv-r"/><path class="fn8qddybi"/></g>`,
		"fallback": "withicons-retro:users",
	});
}

export default Component;
