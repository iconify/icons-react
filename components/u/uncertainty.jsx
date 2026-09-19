import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mro3w3b6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mro3w3b6d"/>`,
		"fallback": "game-icons:uncertainty",
	});
}

export default Component;
