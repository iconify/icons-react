import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/y/yc0xn5b4e.css';
import '../../css/h/hqpiexbvw.css';
import '../../css/g/gexd8zbar.css';
import '../../css/k/kgbqzebyg.css';
import '../../css/h/hyqgebbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZFNzEbbI" x1="11.6" x2="19.7" y1="2.1" y2="14.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGlCKZmeMg" x1="1.4" x2="10.6" y1="1.9" y2="14.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="wm-a yc0xn5b4e"/><path fill="url(#SVGZFNzEbbI)" class="hqpiexbvw wm-a"/><path class="gexd8zbar wm-k"/><path fill="url(#SVGlCKZmeMg)" class="kgbqzebyg wm-k"/><path class="hyqgebbcf wm-s"/></g>`,
		"fallback": "withicons-suite:spell-check",
	});
}

export default Component;
