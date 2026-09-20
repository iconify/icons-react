import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx3t7-i1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx3t7-i1o"/>`,
		"fallback": "quill:snooze-week",
	});
}

export default Component;
