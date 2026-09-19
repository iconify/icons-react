import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhj2skbky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhj2skbky"/>`,
		"fallback": "game-icons:semi-closed-eye",
	});
}

export default Component;
