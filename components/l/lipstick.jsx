import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbt4dkwud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbt4dkwud"/>`,
		"fallback": "game-icons:lipstick",
	});
}

export default Component;
