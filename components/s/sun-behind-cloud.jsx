import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6o9oubkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6o9oubkt"/>`,
		"fallback": "fluent-emoji-high-contrast:sun-behind-cloud",
	});
}

export default Component;
