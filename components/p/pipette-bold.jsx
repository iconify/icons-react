import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hko-q4lad.css';
import '../../css/u/ujph6vdwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hko-q4lad"/><path class="ujph6vdwt"/>`,
		"fallback": "solar:pipette-bold",
	});
}

export default Component;
