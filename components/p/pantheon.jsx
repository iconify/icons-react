import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4l1f8bgi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4l1f8bgi"/>`,
		"fallback": "cib:pantheon",
	});
}

export default Component;
