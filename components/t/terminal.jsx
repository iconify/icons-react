import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/r/rhcejfosm.css';
import '../../css/y/ylxz8zujx.css';
import '../../css/s/sxdqjxb1k.css';
import '../../css/k/k1-fmacew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="rhcejfosm"/><path class="ylxz8zujx"/><path class="sxdqjxb1k"/><path class="k1-fmacew"/></g>`,
		"fallback": "withicons-retro:terminal",
	});
}

export default Component;
