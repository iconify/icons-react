import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_6l8gk2h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_6l8gk2h"/>`,
		"fallback": "fluent-emoji-high-contrast:sun-behind-large-cloud",
	});
}

export default Component;
