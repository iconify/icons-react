import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aivk7ubvr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aivk7ubvr"/>`,
		"fallback": "fluent-emoji-high-contrast:pancakes",
	});
}

export default Component;
