import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5n6mccaa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5n6mccaa"/>`,
		"fallback": "cib:stitcher",
	});
}

export default Component;
