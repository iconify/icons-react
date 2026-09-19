import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2i-2nbix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2i-2nbix"/>`,
		"fallback": "game-icons:swirl-string",
	});
}

export default Component;
