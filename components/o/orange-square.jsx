import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2rvh9ety.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2rvh9ety"/>`,
		"fallback": "fluent-emoji-high-contrast:orange-square",
	});
}

export default Component;
