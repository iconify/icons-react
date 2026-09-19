import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8lkvcaje.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8lkvcaje"/>`,
		"fallback": "fa7-brands:scaleway",
	});
}

export default Component;
