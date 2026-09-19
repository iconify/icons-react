import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn8mepbjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn8mepbjg"/>`,
		"fallback": "game-icons:moon-claws",
	});
}

export default Component;
