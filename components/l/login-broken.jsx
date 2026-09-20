import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/delb6s1mq.css';
import '../../css/l/l6-4u2bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="delb6s1mq"/><path class="l6-4u2bgq"/></g>`,
		"fallback": "solar:login-broken",
	});
}

export default Component;
