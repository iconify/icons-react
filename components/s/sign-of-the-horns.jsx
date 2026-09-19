import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmv-sxkjh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmv-sxkjh"/>`,
		"fallback": "fluent-emoji-high-contrast:sign-of-the-horns",
	});
}

export default Component;
