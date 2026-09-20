import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9map7_9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9map7_9e"/>`,
		"fallback": "quill:send",
	});
}

export default Component;
