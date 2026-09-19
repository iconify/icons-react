import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um_xhab5v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um_xhab5v"/>`,
		"fallback": "fluent-emoji-high-contrast:martial-arts-uniform",
	});
}

export default Component;
