import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzk5aq42g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzk5aq42g"/>`,
		"fallback": "streamline:phone-signal-none-phone-mobile-device-signal-wireless-smartphone-iphone-bar-bars-no-zero-android",
	});
}

export default Component;
