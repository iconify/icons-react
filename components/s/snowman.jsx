import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb74phbvf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb74phbvf"/>`,
		"fallback": "la:snowman",
	});
}

export default Component;
