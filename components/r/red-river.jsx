import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl4di9mpr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl4di9mpr"/>`,
		"fallback": "fa-brands:red-river",
	});
}

export default Component;
