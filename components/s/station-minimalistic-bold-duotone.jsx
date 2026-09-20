import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j70g4ermf.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/fae5zabey.css';
import '../../css/h/h7scsrb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j70g4ermf"/><g class="mc2zb0bvp"><path class="fae5zabey"/><path class="h7scsrb8x"/></g></g>`,
		"fallback": "solar:station-minimalistic-bold-duotone",
	});
}

export default Component;
