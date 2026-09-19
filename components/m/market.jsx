import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_xoy_top.css';

const viewBox = {"width":650,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_xoy_top"/>`,
		"fallback": "il:market",
	});
}

export default Component;
