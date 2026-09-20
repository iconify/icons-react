import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs5sg8uyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs5sg8uyt"/>`,
		"fallback": "pixelarticons:letter-q-circle",
	});
}

export default Component;
