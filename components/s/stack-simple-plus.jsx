import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqa0afbxi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqa0afbxi"/>`,
		"fallback": "pullo:stack-simple-plus",
	});
}

export default Component;
