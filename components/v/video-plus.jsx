import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x1ti5ebvp.css';
import '../../css/b/bp747x4vu.css';
import '../../css/z/zqklhhbcj.css';
import '../../css/z/z-yyzxbhp.css';
import '../../css/e/e5leyacwk.css';
import '../../css/w/w3jddjb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x1ti5ebvp"/><path class="bp747x4vu"/><path class="zqklhhbcj"/><path class="z-yyzxbhp"/><path class="e5leyacwk"/><path class="w3jddjb8z wm-s"/></g>`,
		"fallback": "withicons-retro:video-plus",
	});
}

export default Component;
