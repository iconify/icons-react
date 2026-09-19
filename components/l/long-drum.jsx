import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-1_1ma1h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-1_1ma1h"/>`,
		"fallback": "fluent-emoji-high-contrast:long-drum",
	});
}

export default Component;
