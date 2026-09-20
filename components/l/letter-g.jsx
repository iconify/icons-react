import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxyc8_-xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxyc8_-xk"/>`,
		"fallback": "pixelarticons:letter-g",
	});
}

export default Component;
