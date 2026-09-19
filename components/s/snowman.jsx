import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzq5e4blu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzq5e4blu"/>`,
		"fallback": "game-icons:snowman",
	});
}

export default Component;
