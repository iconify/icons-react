import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8z9413sa.css';

const viewBox = {"width":272,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8z9413sa"/>`,
		"fallback": "zmdi:tumblr",
	});
}

export default Component;
