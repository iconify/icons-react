import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/g/g8d2j8b5w.css';
import '../../css/u/uomi7nb9b.css';
import '../../css/k/kspsokz1k.css';
import '../../css/r/rm0r67bja.css';
import '../../css/i/im3q1wtyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVvNo0pwP" x1="0" x2="0" y1="-47.7" y2="72.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGK3rWCcja" x1="4.8" x2="20.7" y1="3.6" y2="18.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGVvNo0pwP)" class="g8d2j8b5w wm-shadow"/><path class="uomi7nb9b wm-k"/><path fill="url(#SVGK3rWCcja)" class="kspsokz1k wm-k"/><path class="rm0r67bja wm-k"/><path class="im3q1wtyg wm-a"/></g>`,
		"fallback": "withicons-suite:jalebi",
	});
}

export default Component;
