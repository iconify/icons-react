import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je1zpsble.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je1zpsble"/>`,
		"fallback": "fa-brands:snapchat-ghost",
	});
}

export default Component;
