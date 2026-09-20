import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvqi0ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvqi0ubzr"/>`,
		"fallback": "pixelarticons:usb-solid",
	});
}

export default Component;
