import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evefbkbji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evefbkbji"/>`,
		"fallback": "game-icons:time-trap",
	});
}

export default Component;
