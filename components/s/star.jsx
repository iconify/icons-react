import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdm4u1biz.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/m/mas5m-mqo.css';
import '../../css/s/scjf9926w.css';
import '../../css/s/skbfp7ecv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQAuR3cbE" x1="0" x2="0" y1="-43.5" y2="76.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="kdm4u1biz"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGKnfB849a" x1="1.5" x2="22.5" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGQAuR3cbE)" class="mas5m-mqo wm-shadow"/><path class="scjf9926w wm-k"/><path fill="url(#SVGKnfB849a)" class="skbfp7ecv wm-k"/></g>`,
		"fallback": "withicons-suite:star",
	});
}

export default Component;
