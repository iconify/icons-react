import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d40i0wfdn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d40i0wfdn"/>`,
		"fallback": "game-icons:satellite-communication",
	});
}

export default Component;
