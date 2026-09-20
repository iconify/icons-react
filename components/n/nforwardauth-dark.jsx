import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5gsj2b5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5gsj2b5q"/>`,
		"fallback": "selfhst:nforwardauth-dark",
	});
}

export default Component;
