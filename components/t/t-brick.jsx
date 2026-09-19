import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj7h58bge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj7h58bge"/>`,
		"fallback": "game-icons:t-brick",
	});
}

export default Component;
