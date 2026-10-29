import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/m/md-e5zfwk.css';
import '../../css/r/rd2rzqler.css';
import '../../css/d/dh78fzrin.css';
import '../../css/b/b9wq_cb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZQ7icc9d" x1="2.6" x2="8.4" y1="2.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGkmyYUbJr" x1="10.9" x2="22.1" y1="4.9" y2="19.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="md-e5zfwk wm-a"/><path fill="url(#SVGZQ7icc9d)" class="rd2rzqler wm-a"/><path class="dh78fzrin wm-k"/><path fill="url(#SVGkmyYUbJr)" class="b9wq_cb5h wm-k"/></g>`,
		"fallback": "withicons-suite:list-ordered",
	});
}

export default Component;
