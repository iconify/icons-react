import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t03n-gbbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t03n-gbbg"/>`,
		"fallback": "game-icons:sun-spear",
	});
}

export default Component;
