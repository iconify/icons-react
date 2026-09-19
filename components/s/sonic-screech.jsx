import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kimpx1j4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kimpx1j4p"/>`,
		"fallback": "game-icons:sonic-screech",
	});
}

export default Component;
