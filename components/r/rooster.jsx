import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox8x25enn.css';
import '../../css/h/hxjrp7bsm.css';
import '../../css/u/uifpxk46j.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tiw4sgagi.css';
import '../../css/u/u655hlwru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox8x25enn"/><path class="hxjrp7bsm"/><path class="uifpxk46j"/><g class="ij2x_72vy"><path class="tiw4sgagi"/><path class="u655hlwru"/></g>`,
		"fallback": "openmoji:rooster",
	});
}

export default Component;
