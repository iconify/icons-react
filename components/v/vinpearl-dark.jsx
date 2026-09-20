import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq9dqmrph.css';
import '../../css/j/jwr_hibhb.css';
import '../../css/b/bhb0y-bai.css';
import '../../css/c/cmva4-ejl.css';

const viewBox = {"width":89,"height":51};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGk6SpObOG)" class="qq9dqmrph"/><defs><linearGradient id="SVGk6SpObOG" x1="44.5" x2="44.5" y1="0" y2="33.287" gradientUnits="userSpaceOnUse"><stop class="jwr_hibhb"/><stop offset="1" class="bhb0y-bai"/></linearGradient></defs><path class="cmva4-ejl"/></g>`,
		"fallback": "thesvg-color:vinpearl-dark",
	});
}

export default Component;
