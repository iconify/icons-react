import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vly4rr3ve.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vly4rr3ve"/>`,
		"fallback": "fad:logo-aax",
	});
}

export default Component;
