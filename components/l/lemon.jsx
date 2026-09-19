import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe1ilz22l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe1ilz22l"/>`,
		"fallback": "game-icons:lemon",
	});
}

export default Component;
