import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u14q8ob4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u14q8ob4z"/>`,
		"fallback": "game-icons:mortar",
	});
}

export default Component;
