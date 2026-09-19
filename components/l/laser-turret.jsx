import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1_8-ry_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1_8-ry_q"/>`,
		"fallback": "game-icons:laser-turret",
	});
}

export default Component;
