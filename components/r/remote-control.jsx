import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q2fv44bqw.css';
import '../../css/i/iwk_ip_0v.css';
import '../../css/p/p1m5r4_0u.css';
import '../../css/m/mdl08j7yx.css';
import '../../css/l/lvsgs6bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q2fv44bqw wm-shadow"/><path class="iwk_ip_0v wm-shadow"/><path class="p1m5r4_0u"/><path class="mdl08j7yx"/><path class="lvsgs6bwq wm-s"/></g>`,
		"fallback": "withicons-brutal:remote-control",
	});
}

export default Component;
