import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqj53kb9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqj53kb9t"/>`,
		"fallback": "fluent-emoji-high-contrast:soft-ice-cream",
	});
}

export default Component;
