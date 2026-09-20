import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djec45b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djec45b1z"/>`,
		"fallback": "pixelarticons:joystick-sharp",
	});
}

export default Component;
