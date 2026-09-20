import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np9o9uu-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np9o9uu-r"/>`,
		"fallback": "mdi:trash-can-outline",
	});
}

export default Component;
