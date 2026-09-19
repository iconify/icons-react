import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo4qn1t0m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo4qn1t0m"/>`,
		"fallback": "fluent-emoji-high-contrast:telephone-receiver",
	});
}

export default Component;
