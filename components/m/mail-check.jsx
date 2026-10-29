import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/m/mqssrmbaq.css';
import '../../css/x/xm10_ac0v.css';
import '../../css/d/di9mokb_w.css';
import '../../css/k/kqphst_2t.css';
import '../../css/m/mcxv94e_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGgiYRbNF" x1="0" x2="0" y1="-43.5" y2="76.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGY1mYhdSv" x1="1.6" x2="22.4" y1="3.6" y2="20.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGGgiYRbNF)" class="mqssrmbaq wm-shadow"/><path class="wm-k xm10_ac0v"/><path fill="url(#SVGY1mYhdSv)" class="di9mokb_w wm-k"/><path class="kqphst_2t wm-a"/><path class="mcxv94e_m wm-s"/></g>`,
		"fallback": "withicons-suite:mail-check",
	});
}

export default Component;
