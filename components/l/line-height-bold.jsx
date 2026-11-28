import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvuzmly5n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvuzmly5n"/>`,
		"fallback": "pullo:line-height-bold",
	});
}

export default Component;
