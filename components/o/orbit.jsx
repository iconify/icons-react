import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozcusze8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozcusze8j"/>`,
		"fallback": "game-icons:orbit",
	});
}

export default Component;
