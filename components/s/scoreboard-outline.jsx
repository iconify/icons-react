import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvy86qb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvy86qb_r"/>`,
		"fallback": "mdi:scoreboard-outline",
	});
}

export default Component;
