import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu6y1bchq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu6y1bchq"/>`,
		"fallback": "game-icons:parasaurolophus",
	});
}

export default Component;
