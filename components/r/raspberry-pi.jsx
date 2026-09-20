import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc0eu1bke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc0eu1bke"/>`,
		"fallback": "la:raspberry-pi",
	});
}

export default Component;
