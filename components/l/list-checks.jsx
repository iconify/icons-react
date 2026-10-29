import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/c/c-t6f2b5b.css';
import '../../css/g/guw72uwvr.css';
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
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxvF9GePR" x1="1.6" x2="8.9" y1="3.1" y2="20.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGkmyYUbJr" x1="10.9" x2="22.1" y1="4.9" y2="19.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="c-t6f2b5b wm-a"/><path fill="url(#SVGxvF9GePR)" class="guw72uwvr wm-a"/><path class="dh78fzrin wm-k"/><path fill="url(#SVGkmyYUbJr)" class="b9wq_cb5h wm-k"/></g>`,
		"fallback": "withicons-suite:list-checks",
	});
}

export default Component;
