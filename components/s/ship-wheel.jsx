import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_l3c90rx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_l3c90rx"/>`,
		"fallback": "game-icons:ship-wheel",
	});
}

export default Component;
