import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3u6l-bti.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3u6l-bti"/>`,
		"fallback": "pullo:stack-simple-check-bold",
	});
}

export default Component;
