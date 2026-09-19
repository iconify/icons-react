import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_5c160_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_5c160_j"/>`,
		"fallback": "fluent-emoji-high-contrast:teapot",
	});
}

export default Component;
