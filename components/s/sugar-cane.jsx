import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp069p2og.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp069p2og"/>`,
		"fallback": "game-icons:sugar-cane",
	});
}

export default Component;
