import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylxpa8bdu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylxpa8bdu"/>`,
		"fallback": "game-icons:milk-carton",
	});
}

export default Component;
