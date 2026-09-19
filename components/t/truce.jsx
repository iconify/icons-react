import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6d5b7-6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6d5b7-6z"/>`,
		"fallback": "game-icons:truce",
	});
}

export default Component;
