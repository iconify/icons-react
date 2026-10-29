import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/h/h8q7z9b6m.css';
import '../../css/p/p4t_k7b4q.css';
import '../../css/e/e-oa9obhe.css';
import '../../css/g/gppw4xb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGL5OcqeRj" x1="0" x2="0" y1="-38" y2="82" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGZcIU4bYu" x1="2.1" x2="21.9" y1="3.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGL5OcqeRj)" class="h8q7z9b6m wm-shadow"/><path class="p4t_k7b4q wm-k"/><path fill="url(#SVGZcIU4bYu)" class="e-oa9obhe wm-k"/><path class="gppw4xb-e wm-k"/></g>`,
		"fallback": "withicons-suite:warehouse",
	});
}

export default Component;
