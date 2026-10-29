import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/m/m9fy3-hzz.css';
import '../../css/i/idtt7mb_j.css';
import '../../css/s/sb85tmbtr.css';
import '../../css/y/yq-5pqbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXmQTnegu" x1="4.3" x2="19.7" y1="4.3" y2="19.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGxmy44bCZ" x1="1.4" x2="22.6" y1="1.4" y2="22.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="m9fy3-hzz wm-a"/><path fill="url(#SVGXmQTnegu)" class="idtt7mb_j wm-a"/><path class="sb85tmbtr wm-k"/><path fill="url(#SVGxmy44bCZ)" class="wm-k yq-5pqbgj"/></g>`,
		"fallback": "withicons-suite:loader",
	});
}

export default Component;
