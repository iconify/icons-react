import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k78kfq9cs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k78kfq9cs"/>`,
		"fallback": "game-icons:slashed-shield",
	});
}

export default Component;
