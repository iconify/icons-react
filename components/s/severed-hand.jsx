import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omkcnbc1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omkcnbc1k"/>`,
		"fallback": "game-icons:severed-hand",
	});
}

export default Component;
