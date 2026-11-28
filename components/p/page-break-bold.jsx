import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uou3azb4w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uou3azb4w"/>`,
		"fallback": "pullo:page-break-bold",
	});
}

export default Component;
