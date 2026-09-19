import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flyk9bcml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flyk9bcml"/>`,
		"fallback": "game-icons:piranha",
	});
}

export default Component;
