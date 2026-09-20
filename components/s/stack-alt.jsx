import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-qq7fbyk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-qq7fbyk"/>`,
		"fallback": "quill:stack-alt",
	});
}

export default Component;
