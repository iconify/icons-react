import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_a1r3b0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_a1r3b0r"/>`,
		"fallback": "game-icons:trousers",
	});
}

export default Component;
