import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_trbkfzc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_trbkfzc"/>`,
		"fallback": "fluent-emoji-high-contrast:pink-heart",
	});
}

export default Component;
