import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpw-f0nxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpw-f0nxu"/>`,
		"fallback": "game-icons:spock-hand",
	});
}

export default Component;
