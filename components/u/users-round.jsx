import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wkmqm0bou.css';
import '../../css/t/t0q_83c6j.css';
import '../../css/z/zc3j4ib-b.css';
import '../../css/s/s9j5y_3-b.css';
import '../../css/z/zt6r97ulh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wkmqm0bou wm-shadow"/><path class="t0q_83c6j"/><path class="zc3j4ib-b"/><path class="s9j5y_3-b"/><path class="zt6r97ulh"/></g>`,
		"fallback": "withicons-retro:users-round",
	});
}

export default Component;
