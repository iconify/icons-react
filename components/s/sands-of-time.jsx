import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cygib890u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cygib890u"/>`,
		"fallback": "game-icons:sands-of-time",
	});
}

export default Component;
