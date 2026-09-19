import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udfp8ebin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udfp8ebin"/>`,
		"fallback": "game-icons:race-car",
	});
}

export default Component;
