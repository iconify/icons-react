import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c9lgnpnwd.css';
import '../../css/f/foci301wn.css';
import '../../css/y/yaatpweri.css';
import '../../css/w/w4od_ccfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c9lgnpnwd wm-shadow"/><path class="foci301wn"/><path class="yaatpweri"/><path class="w4od_ccfl"/></g>`,
		"fallback": "withicons-retro:toran",
	});
}

export default Component;
