import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t675-1b2h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t675-1b2h"/>`,
		"fallback": "fluent-emoji-high-contrast:scissors",
	});
}

export default Component;
