import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c32_iib3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c32_iib3k"/>`,
		"fallback": "fluent-emoji-high-contrast:potted-plant",
	});
}

export default Component;
