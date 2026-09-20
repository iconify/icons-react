import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsbq87ajf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsbq87ajf"/>`,
		"fallback": "radix-icons:letter-spacing",
	});
}

export default Component;
