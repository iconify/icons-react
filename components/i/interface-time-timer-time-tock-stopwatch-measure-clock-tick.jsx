import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wvkftvb4s.css';
import '../../css/c/cwvu_xbtc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="wvkftvb4s"/><path class="cwvu_xbtc"/></g>`,
		"fallback": "streamline:interface-time-timer-time-tock-stopwatch-measure-clock-tick",
	});
}

export default Component;
