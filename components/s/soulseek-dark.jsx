import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f40n46bcb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f40n46bcb"/>`,
		"fallback": "selfhst:soulseek-dark",
	});
}

export default Component;
