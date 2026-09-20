import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy0s6l-yp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy0s6l-yp"/>`,
		"fallback": "radix-icons:space-evenly-horizontally",
	});
}

export default Component;
