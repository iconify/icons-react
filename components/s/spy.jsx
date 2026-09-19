import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub56r4xjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub56r4xjn"/>`,
		"fallback": "game-icons:spy",
	});
}

export default Component;
