import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hww2_jbko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hww2_jbko"/>`,
		"fallback": "game-icons:tic-tac-toe",
	});
}

export default Component;
