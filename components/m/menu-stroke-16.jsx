import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1tdzcbmz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1tdzcbmz"/>`,
		"fallback": "garden:menu-stroke-16",
	});
}

export default Component;
