import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcr65cb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcr65cb0h"/>`,
		"fallback": "mdi:thumbs-down-outline",
	});
}

export default Component;
