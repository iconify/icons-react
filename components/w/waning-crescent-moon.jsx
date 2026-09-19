import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoizpacxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoizpacxh"/>`,
		"fallback": "fluent-emoji-high-contrast:waning-crescent-moon",
	});
}

export default Component;
