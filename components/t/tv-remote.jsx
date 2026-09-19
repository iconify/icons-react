import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yma-ombuc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yma-ombuc"/>`,
		"fallback": "game-icons:tv-remote",
	});
}

export default Component;
