import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/q/qiby9o85z.css';
import '../../css/z/zz5knmbkg.css';
import '../../css/p/pdsf7be0i.css';
import '../../css/x/xpp9z3b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8X3Uveqa" x1="0" x2="0" y1="-46.1" y2="73.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVG6GFEYcVl" x1="5" x2="19" y1="1.6" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVG8X3Uveqa)" class="qiby9o85z wm-shadow"/><path class="wm-k zz5knmbkg"/><path fill="url(#SVG6GFEYcVl)" class="pdsf7be0i wm-k"/><path class="wm-a xpp9z3b2j"/></g>`,
		"fallback": "withicons-suite:rabbit",
	});
}

export default Component;
