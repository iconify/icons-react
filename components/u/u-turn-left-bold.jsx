import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm_q50s4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm_q50s4y"/>`,
		"fallback": "mdi:u-turn-left-bold",
	});
}

export default Component;
