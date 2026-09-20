import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aljnsoips.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aljnsoips"/>`,
		"fallback": "streamline:travel-wayfinder-stairs-1-stairs-staircase-right",
	});
}

export default Component;
