import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a577o8l2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a577o8l2r"/>`,
		"fallback": "game-icons:swap-bag",
	});
}

export default Component;
