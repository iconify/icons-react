import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8x3jzb_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8x3jzb_u"/>`,
		"fallback": "game-icons:sonic-shoes",
	});
}

export default Component;
