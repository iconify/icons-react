import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz7zwov4t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz7zwov4t"/>`,
		"fallback": "streamline:phone-signal-medium-smartphone-phone-mobile-device-iphone-signal-medium-wireless-bar-bars-android",
	});
}

export default Component;
