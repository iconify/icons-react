import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq69apbvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq69apbvb"/>`,
		"fallback": "game-icons:swallower",
	});
}

export default Component;
