import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3j32evkh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3j32evkh"/>`,
		"fallback": "fluent-emoji-high-contrast:jellyfish",
	});
}

export default Component;
