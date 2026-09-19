import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wty5_-bzz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wty5_-bzz"/>`,
		"fallback": "game-icons:martyr-memorial",
	});
}

export default Component;
