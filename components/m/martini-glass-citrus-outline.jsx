import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcx_w8b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcx_w8b6o"/>`,
		"fallback": "flowbite:martini-glass-citrus-outline",
	});
}

export default Component;
