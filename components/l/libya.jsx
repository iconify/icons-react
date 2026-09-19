import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqseh9bgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqseh9bgr"/>`,
		"fallback": "game-icons:libya",
	});
}

export default Component;
