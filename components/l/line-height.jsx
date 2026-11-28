import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccop-1btu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccop-1btu"/>`,
		"fallback": "pullo:line-height",
	});
}

export default Component;
