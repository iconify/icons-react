import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpl6xib5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpl6xib5q"/>`,
		"fallback": "selfhst:printables-light",
	});
}

export default Component;
