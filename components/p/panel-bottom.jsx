import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/k/k53ja0b-l.css';
import '../../css/t/tt1xdhbgl.css';
import '../../css/s/sal_90ycc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXa2mVUoZ" x1="0" x2="0" y1="-46.7" y2="73.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGnM0ewdKX" x1="2.1" x2="21.9" y1="2.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGXa2mVUoZ)" class="k53ja0b-l wm-shadow"/><path class="tt1xdhbgl wm-k"/><path fill="url(#SVGnM0ewdKX)" class="sal_90ycc wm-k"/></g>`,
		"fallback": "withicons-suite:panel-bottom",
	});
}

export default Component;
