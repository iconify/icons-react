import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqvv9mw1q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqvv9mw1q"/>`,
		"fallback": "game-icons:noodles",
	});
}

export default Component;
