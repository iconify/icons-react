import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5u0jjb6u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5u0jjb6u"/>`,
		"fallback": "fluent-emoji-high-contrast:puzzle-piece",
	});
}

export default Component;
