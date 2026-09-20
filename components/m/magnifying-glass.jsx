import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi5qd8jiy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi5qd8jiy"/>`,
		"fallback": "oi:magnifying-glass",
	});
}

export default Component;
