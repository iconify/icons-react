import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-yle1b9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-yle1b9m"/>`,
		"fallback": "game-icons:robot-helmet",
	});
}

export default Component;
