import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8y7qwbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8y7qwbbj"/>`,
		"fallback": "pixelarticons:usb-sharp",
	});
}

export default Component;
