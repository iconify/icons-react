import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxoeqw4ry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxoeqw4ry"/>`,
		"fallback": "fluent-emoji-high-contrast:tangerine",
	});
}

export default Component;
