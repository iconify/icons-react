import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7e4hvb7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7e4hvb7k"/>`,
		"fallback": "game-icons:mountain-cave",
	});
}

export default Component;
