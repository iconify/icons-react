import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf203d6op.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf203d6op"/>`,
		"fallback": "game-icons:thumb-down",
	});
}

export default Component;
