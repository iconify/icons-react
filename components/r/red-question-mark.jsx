import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q43hrvcvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q43hrvcvd"/>`,
		"fallback": "fluent-emoji-high-contrast:red-question-mark",
	});
}

export default Component;
