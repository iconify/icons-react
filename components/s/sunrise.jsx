import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru_76vphk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru_76vphk"/>`,
		"fallback": "game-icons:sunrise",
	});
}

export default Component;
