import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-wwcb8-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-wwcb8-h"/>`,
		"fallback": "fluent-emoji-high-contrast:police-car-light",
	});
}

export default Component;
