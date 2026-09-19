import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll8x3e97m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll8x3e97m"/>`,
		"fallback": "game-icons:kenku-head",
	});
}

export default Component;
