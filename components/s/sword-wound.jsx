import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln8iwp-4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln8iwp-4i"/>`,
		"fallback": "game-icons:sword-wound",
	});
}

export default Component;
