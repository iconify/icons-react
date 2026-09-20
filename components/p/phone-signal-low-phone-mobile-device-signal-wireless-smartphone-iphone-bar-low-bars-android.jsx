import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu1r1geqz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu1r1geqz"/>`,
		"fallback": "streamline:phone-signal-low-phone-mobile-device-signal-wireless-smartphone-iphone-bar-low-bars-android",
	});
}

export default Component;
