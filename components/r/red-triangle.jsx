import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4ww4zb8l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4ww4zb8l"/>`,
		"fallback": "fluent-emoji-high-contrast:red-triangle",
	});
}

export default Component;
