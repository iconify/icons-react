import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/b-vmt01es.css';
import '../../css/y/ya-l5vbut.css';
import '../../css/e/eo4r5jb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYtzfwcxs" x1="10" x2="14" y1="4" y2="19.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="b-vmt01es wm-k"/><path class="wm-deco ya-l5vbut"/><path fill="url(#SVGYtzfwcxs)" class="eo4r5jb-q wm-k"/></g>`,
		"fallback": "withicons-valentine:waves",
	});
}

export default Component;
