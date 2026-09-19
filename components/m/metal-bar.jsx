import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn1tm3vbz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn1tm3vbz"/>`,
		"fallback": "game-icons:metal-bar",
	});
}

export default Component;
