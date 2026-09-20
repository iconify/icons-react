import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jhf0v4-jb.css';
import '../../css/l/lyfzl0b8c.css';
import '../../css/y/y_h9g_9rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jhf0v4-jb"/><path class="lyfzl0b8c"/><path class="y_h9g_9rq"/></g>`,
		"fallback": "solar:map-linear",
	});
}

export default Component;
