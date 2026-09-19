import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2fa6dige.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2fa6dige"/>`,
		"fallback": "game-icons:paw-heart",
	});
}

export default Component;
