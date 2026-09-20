import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqqu69bdf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqqu69bdf"/>`,
		"fallback": "streamline:phone-signal-full-phone-mobile-device-signal-wireless-smartphone-iphone-bar-bars-full-android",
	});
}

export default Component;
