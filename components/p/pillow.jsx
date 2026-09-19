import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poh08lb9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poh08lb9k"/>`,
		"fallback": "game-icons:pillow",
	});
}

export default Component;
