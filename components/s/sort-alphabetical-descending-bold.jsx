import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0w-96bpg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0w-96bpg"/>`,
		"fallback": "pullo:sort-alphabetical-descending-bold",
	});
}

export default Component;
