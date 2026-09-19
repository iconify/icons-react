import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5knh5b1s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5knh5b1s"/>`,
		"fallback": "fluent-emoji-high-contrast:melon",
	});
}

export default Component;
