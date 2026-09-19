import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whfw6qb_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whfw6qb_b"/>`,
		"fallback": "game-icons:lunar-module",
	});
}

export default Component;
