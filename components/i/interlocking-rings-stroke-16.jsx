import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgv36mbha.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgv36mbha"/>`,
		"fallback": "garden:interlocking-rings-stroke-16",
	});
}

export default Component;
