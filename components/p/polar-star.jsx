import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2x-0cbks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2x-0cbks"/>`,
		"fallback": "game-icons:polar-star",
	});
}

export default Component;
