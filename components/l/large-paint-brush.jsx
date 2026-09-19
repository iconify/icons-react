import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2dgmq29u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2dgmq29u"/>`,
		"fallback": "game-icons:large-paint-brush",
	});
}

export default Component;
