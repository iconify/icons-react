import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx_m927ii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx_m927ii"/>`,
		"fallback": "game-icons:piercing-sword",
	});
}

export default Component;
