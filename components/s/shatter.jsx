import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9j4j5ave.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9j4j5ave"/>`,
		"fallback": "game-icons:shatter",
	});
}

export default Component;
