import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8gj4dbhy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8gj4dbhy"/>`,
		"fallback": "game-icons:star-shuriken",
	});
}

export default Component;
