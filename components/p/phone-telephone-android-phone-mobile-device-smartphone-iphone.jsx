import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0k4426mb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0k4426mb"/>`,
		"fallback": "streamline:phone-telephone-android-phone-mobile-device-smartphone-iphone",
	});
}

export default Component;
