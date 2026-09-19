import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u497zqblr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u497zqblr"/>`,
		"fallback": "game-icons:inverted-dice-1",
	});
}

export default Component;
