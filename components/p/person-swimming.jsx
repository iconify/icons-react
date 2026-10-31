import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pz7c98mqm.css';
import '../../css/y/ydgymnbxt.css';
import '../../css/f/ffzga1q9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pz7c98mqm wm-shadow"/><path class="wm-shadow ydgymnbxt"/><path class="ffzga1q9u"/></g>`,
		"fallback": "withicons-brutal:person-swimming",
	});
}

export default Component;
