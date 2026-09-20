import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgrm2rbfz.css';
import '../../css/r/rrxhurnze.css';
import '../../css/c/c9dh15yvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hgrm2rbfz"/><path class="rrxhurnze"/><path class="c9dh15yvi"/></g>`,
		"fallback": "solar:ruler-pen-linear",
	});
}

export default Component;
