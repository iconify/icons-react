import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q_3x99b7q.css';
import '../../css/t/tzz-u_hra.css';
import '../../css/r/rucv27bpi.css';
import '../../css/i/it7rt0b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q_3x99b7q wm-shadow"/><path class="tzz-u_hra wm-shadow"/><path class="rucv27bpi"/><path class="it7rt0b-j"/></g>`,
		"fallback": "withicons-brutal:projector",
	});
}

export default Component;
