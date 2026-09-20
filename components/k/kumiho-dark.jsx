import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv10l8h9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv10l8h9u"/>`,
		"fallback": "selfhst:kumiho-dark",
	});
}

export default Component;
