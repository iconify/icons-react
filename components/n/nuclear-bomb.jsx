import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqv43tb6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqv43tb6m"/>`,
		"fallback": "game-icons:nuclear-bomb",
	});
}

export default Component;
