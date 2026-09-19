import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewpm2x98k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewpm2x98k"/>`,
		"fallback": "game-icons:scorpion-tail",
	});
}

export default Component;
