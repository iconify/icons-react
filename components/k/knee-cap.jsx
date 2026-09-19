import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0r16-fkb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0r16-fkb"/>`,
		"fallback": "game-icons:knee-cap",
	});
}

export default Component;
