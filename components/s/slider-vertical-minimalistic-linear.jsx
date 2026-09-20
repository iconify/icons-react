import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v8oc18bcm.css';
import '../../css/u/u1ny42dfv.css';
import '../../css/v/vlev-4bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v8oc18bcm"/><path class="u1ny42dfv"/><path class="vlev-4bxg"/></g>`,
		"fallback": "solar:slider-vertical-minimalistic-linear",
	});
}

export default Component;
