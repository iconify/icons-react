import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po_ex1brd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po_ex1brd"/>`,
		"fallback": "carbon:succession-flow-connection",
	});
}

export default Component;
