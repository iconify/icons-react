import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip3_c083h.css';
import '../../css/y/ymnh5s7qn.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/d-a-ltu6p.css';
import '../../css/a/a10-0lnhe.css';
import '../../css/t/tmj_9mbwv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip3_c083h"/><path class="ymnh5s7qn"/><g class="ij2x_72vy"><path class="d-a-ltu6p"/><path class="a10-0lnhe"/><path class="tmj_9mbwv"/></g>`,
		"fallback": "openmoji:rhinoceros",
	});
}

export default Component;
