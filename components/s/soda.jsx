import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xd71e0bqy.css';
import '../../css/c/c5gammbcq.css';
import '../../css/x/xndcqhjrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xd71e0bqy"/><path class="c5gammbcq"/><path class="xndcqhjrs"/></g>`,
		"fallback": "andrsrxn:soda",
	});
}

export default Component;
