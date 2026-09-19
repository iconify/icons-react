import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl-az0bur.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl-az0bur"/>`,
		"fallback": "at-icons:plug",
	});
}

export default Component;
