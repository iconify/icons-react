import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/u/ud5_5absl.css';
import '../../css/p/puehgmbqm.css';
import '../../css/s/sk1040fdn.css';
import '../../css/o/ozvyjw72h.css';
import '../../css/r/rra6shbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNWIg6qUC" x1="14.6" x2="21.4" y1="3.6" y2="15.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGH5BovbCZ" x1="2.4" x2="21.6" y1="8.4" y2="21.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="ud5_5absl wm-a"/><path fill="url(#SVGNWIg6qUC)" class="puehgmbqm wm-a"/><path class="sk1040fdn wm-k"/><path class="ozvyjw72h wm-k"/><path fill="url(#SVGH5BovbCZ)" class="rra6shbzp wm-k"/></g>`,
		"fallback": "withicons-suite:redo",
	});
}

export default Component;
