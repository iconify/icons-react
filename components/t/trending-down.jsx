import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/d/dcxpqwbfo.css';
import '../../css/a/aiafjjwdd.css';
import '../../css/w/w9xn72bhj.css';
import '../../css/t/tjlsq5tiy.css';
import '../../css/g/gdfmnvwft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpjVXdekh" x1="14.1" x2="21.9" y1="10.1" y2="17.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGeDHJ9bne" x1="1.4" x2="22.1" y1="5.4" y2="18.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="dcxpqwbfo wm-a"/><path fill="url(#SVGpjVXdekh)" class="aiafjjwdd wm-a"/><path class="w9xn72bhj wm-k"/><path class="tjlsq5tiy wm-k"/><path fill="url(#SVGeDHJ9bne)" class="gdfmnvwft wm-k"/></g>`,
		"fallback": "withicons-suite:trending-down",
	});
}

export default Component;
