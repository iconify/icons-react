import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq1k364qb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq1k364qb"/>`,
		"fallback": "game-icons:mineral-heart",
	});
}

export default Component;
