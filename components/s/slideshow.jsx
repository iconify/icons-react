import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vic1rbbpu.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vic1rbbpu"/>`,
		"fallback": "zmdi:slideshow",
	});
}

export default Component;
