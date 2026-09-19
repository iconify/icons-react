import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3v9z9dcl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3v9z9dcl"/>`,
		"fallback": "ion:md-moon",
	});
}

export default Component;
