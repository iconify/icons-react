import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_t0vpb4a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_t0vpb4a"/>`,
		"fallback": "game-icons:school-bag",
	});
}

export default Component;
