import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp7mf_b4w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp7mf_b4w"/>`,
		"fallback": "fluent-emoji-high-contrast:shooting-star",
	});
}

export default Component;
