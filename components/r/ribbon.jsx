import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6h3ts8be.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6h3ts8be"/>`,
		"fallback": "game-icons:ribbon",
	});
}

export default Component;
