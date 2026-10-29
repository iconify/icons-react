import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/u/ugancsgnx.css';
import '../../css/y/ybumi5buz.css';
import '../../css/l/lt6bhbc5h.css';
import '../../css/p/p7vtxe7nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFNpeyePE" x1="2.1" x2="21.9" y1="4.1" y2="19.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGVbEfEHmt" x1="1.9" x2="22.1" y1="9.4" y2="14.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="ugancsgnx wm-a"/><path fill="url(#SVGFNpeyePE)" class="wm-a ybumi5buz"/><path class="lt6bhbc5h wm-k"/><path fill="url(#SVGVbEfEHmt)" class="p7vtxe7nl wm-k"/></g>`,
		"fallback": "withicons-suite:waves",
	});
}

export default Component;
