import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i70r71bjf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i70r71bjf"/>`,
		"fallback": "octicon:pulse-16",
	});
}

export default Component;
