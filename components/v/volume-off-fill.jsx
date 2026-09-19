import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdkq4lblu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdkq4lblu"/>`,
		"fallback": "bi:volume-off-fill",
	});
}

export default Component;
