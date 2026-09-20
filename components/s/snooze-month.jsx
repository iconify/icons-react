import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edhu5n-ej.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edhu5n-ej"/>`,
		"fallback": "quill:snooze-month",
	});
}

export default Component;
