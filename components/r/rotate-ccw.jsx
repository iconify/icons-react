import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/p/pt3boqpjm.css';
import '../../css/x/xh53i5sho.css';
import '../../css/e/e3tafdm5u.css';
import '../../css/r/rsff8vbaz.css';
import '../../css/n/nn98smtku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkjZR8boQ" x1="4.1" x2="10.9" y1="1.6" y2="8.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGbd4YzeYp" x1="2.4" x2="21.6" y1="2.8" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="pt3boqpjm wm-a"/><path fill="url(#SVGkjZR8boQ)" class="wm-a xh53i5sho"/><path class="e3tafdm5u wm-k"/><path class="rsff8vbaz wm-k"/><path fill="url(#SVGbd4YzeYp)" class="nn98smtku wm-k"/></g>`,
		"fallback": "withicons-suite:rotate-ccw",
	});
}

export default Component;
