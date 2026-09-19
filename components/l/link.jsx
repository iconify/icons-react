import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbxi97qzh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbxi97qzh"/>`,
		"fallback": "foundation:link",
	});
}

export default Component;
