import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5qzu3bih.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5qzu3bih"/>`,
		"fallback": "selfhst:spotizerr-light",
	});
}

export default Component;
