import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y95y0dbdq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y95y0dbdq"/>`,
		"fallback": "radix-icons:stretch-horizontally",
	});
}

export default Component;
