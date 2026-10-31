import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ybg2dackn.css';
import '../../css/e/en8q3nbhr.css';
import '../../css/n/nej7cibnr.css';
import '../../css/v/v-2onvirn.css';
import '../../css/o/or1ysf0pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ybg2dackn"/><path class="en8q3nbhr wm-shadow"/><path class="nej7cibnr"/><path class="v-2onvirn"/><path class="or1ysf0pr"/></g>`,
		"fallback": "withicons-brutal:virus",
	});
}

export default Component;
