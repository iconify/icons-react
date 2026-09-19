import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri_-vhbkr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri_-vhbkr"/>`,
		"fallback": "fluent-emoji-high-contrast:red-heart",
	});
}

export default Component;
