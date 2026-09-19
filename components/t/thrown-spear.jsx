import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkfrr02yn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkfrr02yn"/>`,
		"fallback": "game-icons:thrown-spear",
	});
}

export default Component;
