import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frb1tob9r.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frb1tob9r"/>`,
		"fallback": "fa-brands:scribd",
	});
}

export default Component;
