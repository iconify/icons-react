import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw1b53b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw1b53b2d"/>`,
		"fallback": "pixelarticons:letter-h-circle",
	});
}

export default Component;
