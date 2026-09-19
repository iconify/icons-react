import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b83gw5wch.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b83gw5wch"/>`,
		"fallback": "fluent-emoji-high-contrast:wavy-dash",
	});
}

export default Component;
