import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fojojjb2w.css';
import '../../css/e/eglri6m1j.css';
import '../../css/j/j81d8w44a.css';
import '../../css/w/wnuf0j6-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fojojjb2w"><path class="eglri6m1j wm-shadow"/><path class="j81d8w44a wm-k"/><path class="wm-a wnuf0j6-g"/></g>`,
		"fallback": "withicons-brutal:paisley",
	});
}

export default Component;
