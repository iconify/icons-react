import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-yb6znrb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-yb6znrb"/>`,
		"fallback": "selfhst:poznote-light",
	});
}

export default Component;
