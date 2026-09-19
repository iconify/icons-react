import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l58-tfryc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l58-tfryc"/>`,
		"fallback": "game-icons:spade-skull",
	});
}

export default Component;
