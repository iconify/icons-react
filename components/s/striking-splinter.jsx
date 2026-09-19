import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p08cwsb5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p08cwsb5m"/>`,
		"fallback": "game-icons:striking-splinter",
	});
}

export default Component;
