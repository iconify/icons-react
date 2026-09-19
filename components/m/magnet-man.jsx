import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js-wdwglr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js-wdwglr"/>`,
		"fallback": "game-icons:magnet-man",
	});
}

export default Component;
