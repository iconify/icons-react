import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blg0q0b5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blg0q0b5r"/>`,
		"fallback": "game-icons:rattlesnake",
	});
}

export default Component;
