import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9xf69qzd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9xf69qzd"/>`,
		"fallback": "pullo:restroom-light",
	});
}

export default Component;
