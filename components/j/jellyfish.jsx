import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne25vkbnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne25vkbnd"/>`,
		"fallback": "game-icons:jellyfish",
	});
}

export default Component;
