import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw7xa2b-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw7xa2b-r"/>`,
		"fallback": "game-icons:tie",
	});
}

export default Component;
