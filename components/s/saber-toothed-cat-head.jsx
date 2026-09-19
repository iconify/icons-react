import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylm14b_5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylm14b_5d"/>`,
		"fallback": "game-icons:saber-toothed-cat-head",
	});
}

export default Component;
