import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty-y1pi4q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty-y1pi4q"/>`,
		"fallback": "fluent-emoji-high-contrast:no-entry",
	});
}

export default Component;
