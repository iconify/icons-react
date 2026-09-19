import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7n4rvtdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7n4rvtdr"/>`,
		"fallback": "game-icons:steering-wheel",
	});
}

export default Component;
