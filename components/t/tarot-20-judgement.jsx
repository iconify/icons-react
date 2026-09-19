import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_9wdobys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_9wdobys"/>`,
		"fallback": "game-icons:tarot-20-judgement",
	});
}

export default Component;
