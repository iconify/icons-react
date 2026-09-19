import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrta7ubmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrta7ubmb"/>`,
		"fallback": "game-icons:pirate-hook",
	});
}

export default Component;
