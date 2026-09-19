import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezzt3p5xl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezzt3p5xl"/>`,
		"fallback": "game-icons:tavern-sign",
	});
}

export default Component;
