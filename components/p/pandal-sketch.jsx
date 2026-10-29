import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oodxp7bbg.css';
import '../../css/j/jc8rmbbwf.css';
import '../../css/w/wrazlswpt.css';
import '../../css/f/fn2bv2b_d.css';
import '../../css/r/rsmf1ubtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oodxp7bbg wm-deco"/><path class="jc8rmbbwf wm-k"/><path class="wm-k wrazlswpt"/><path class="fn2bv2b_d wm-a"/><path class="rsmf1ubtf wm-a"/></g>`,
		"fallback": "withicons:pandal-sketch",
	});
}

export default Component;
