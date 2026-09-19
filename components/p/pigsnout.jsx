import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9wy8vbyy.css';
import '../../css/q/qbotcdkoh.css';
import '../../css/r/rcv83i2oj.css';
import '../../css/h/hddayxb0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9wy8vbyy"/><path class="qbotcdkoh"/><path class="rcv83i2oj"/><path class="hddayxb0e"/>`,
		"fallback": "fxemoji:pigsnout",
	});
}

export default Component;
