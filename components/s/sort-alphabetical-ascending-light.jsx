import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuf1bstzr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuf1bstzr"/>`,
		"fallback": "pullo:sort-alphabetical-ascending-light",
	});
}

export default Component;
