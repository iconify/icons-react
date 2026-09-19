import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs2ej9a6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs2ej9a6q"/>`,
		"fallback": "game-icons:leaky-skull",
	});
}

export default Component;
