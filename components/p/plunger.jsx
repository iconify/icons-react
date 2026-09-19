import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqyj71b0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqyj71b0r"/>`,
		"fallback": "fluent-emoji-high-contrast:plunger",
	});
}

export default Component;
