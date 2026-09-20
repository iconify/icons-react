import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3c6beb0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3c6beb0u"/>`,
		"fallback": "subway:mark-3",
	});
}

export default Component;
