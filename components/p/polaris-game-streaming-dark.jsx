import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8m4t8b5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8m4t8b5r"/>`,
		"fallback": "selfhst:polaris-game-streaming-dark",
	});
}

export default Component;
