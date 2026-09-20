import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f43t98_ih.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f43t98_ih"/>`,
		"fallback": "selfhst:pinterest-light",
	});
}

export default Component;
