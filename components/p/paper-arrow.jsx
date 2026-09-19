import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8le6j7tm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8le6j7tm"/>`,
		"fallback": "game-icons:paper-arrow",
	});
}

export default Component;
