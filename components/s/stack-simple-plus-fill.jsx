import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7up64-ht.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7up64-ht"/>`,
		"fallback": "pullo:stack-simple-plus-fill",
	});
}

export default Component;
