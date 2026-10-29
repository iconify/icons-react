import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/z/zlkpl7qwb.css';
import '../../css/q/qiimlemay.css';
import '../../css/l/l2hwo645r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGq0F5YZqd" x1="0" x2="0" y1="-43.7" y2="76.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGnM0ewdKX" x1="2.1" x2="21.9" y1="2.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGq0F5YZqd)" class="wm-shadow zlkpl7qwb"/><path class="qiimlemay wm-k"/><path fill="url(#SVGnM0ewdKX)" class="l2hwo645r wm-k"/></g>`,
		"fallback": "withicons-suite:panel-top",
	});
}

export default Component;
