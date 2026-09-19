import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9oo0hb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9oo0hb0j"/>`,
		"fallback": "flowbite:letter-italic-outline",
	});
}

export default Component;
