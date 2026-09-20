import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j5dlaobit.css';
import '../../css/t/t49mdkbyt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j5dlaobit"/><path class="t49mdkbyt"/></g>`,
		"fallback": "streamline:interface-time-stop-watch-alternate-timer-countdown-clock",
	});
}

export default Component;
