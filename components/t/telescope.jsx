import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xdami-kyz.css';
import '../../css/i/ip-ph748q.css';
import '../../css/t/t8101zb8u.css';
import '../../css/f/fyprvmbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xdami-kyz"/><path class="ip-ph748q"/><path class="t8101zb8u"/><path class="fyprvmbtj"/></g>`,
		"fallback": "withicons-retro:telescope",
	});
}

export default Component;
