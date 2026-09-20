import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-6k85rjb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-6k85rjb"/>`,
		"fallback": "picon:soup",
	});
}

export default Component;
