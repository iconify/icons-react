import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr8d5qbcs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr8d5qbcs"/>`,
		"fallback": "pinhead:south-carolina",
	});
}

export default Component;
