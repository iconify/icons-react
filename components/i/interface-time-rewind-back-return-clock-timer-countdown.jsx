import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ifonk3rbg.css';
import '../../css/f/f4ulmeapd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ifonk3rbg"/><path class="f4ulmeapd"/></g>`,
		"fallback": "streamline:interface-time-rewind-back-return-clock-timer-countdown",
	});
}

export default Component;
