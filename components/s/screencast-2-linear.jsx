import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u2yv535hf.css';
import '../../css/v/vrqfoi8ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u2yv535hf"/><path class="vrqfoi8ob"/></g>`,
		"fallback": "solar:screencast-2-linear",
	});
}

export default Component;
