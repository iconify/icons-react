import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy4pajm8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy4pajm8z"/>`,
		"fallback": "fluent-emoji-flat:red-triangle-pointed-down",
	});
}

export default Component;
