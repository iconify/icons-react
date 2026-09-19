import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4z9n5bkb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4z9n5bkb"/>`,
		"fallback": "game-icons:north-star-shuriken",
	});
}

export default Component;
