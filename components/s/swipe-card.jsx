import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slrd-751e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slrd-751e"/>`,
		"fallback": "game-icons:swipe-card",
	});
}

export default Component;
