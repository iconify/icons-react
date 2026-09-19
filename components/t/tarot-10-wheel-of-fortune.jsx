import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6d33_q5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6d33_q5w"/>`,
		"fallback": "game-icons:tarot-10-wheel-of-fortune",
	});
}

export default Component;
