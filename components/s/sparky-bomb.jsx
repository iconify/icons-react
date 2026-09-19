import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwrw1yo3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwrw1yo3e"/>`,
		"fallback": "game-icons:sparky-bomb",
	});
}

export default Component;
