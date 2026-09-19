import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9aa4ibqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9aa4ibqx"/>`,
		"fallback": "fluent-emoji-high-contrast:ring-buoy",
	});
}

export default Component;
