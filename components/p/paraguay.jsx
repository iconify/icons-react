import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt2tfpm2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt2tfpm2e"/>`,
		"fallback": "game-icons:paraguay",
	});
}

export default Component;
