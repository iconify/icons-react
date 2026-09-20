import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nu5enkbzg.css';
import '../../css/z/zn10sld1h.css';
import '../../css/w/w357jhe3h.css';
import '../../css/z/z9zrhebnw.css';
import '../../css/e/e3zt21b_v.css';
import '../../css/r/rkninmigh.css';
import '../../css/h/hflxsej9h.css';
import '../../css/b/bjkn8_l3w.css';
import '../../css/m/mxjwe0bkt.css';
import '../../css/r/rrznc8wdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nu5enkbzg"/><path class="zn10sld1h"/><path class="w357jhe3h"/><path class="z9zrhebnw"/><path class="e3zt21b_v"/><path class="rkninmigh"/><path class="hflxsej9h"/><path class="bjkn8_l3w"/><path class="mxjwe0bkt"/><path class="rrznc8wdy"/></g>`,
		"fallback": "solar:video-frame-replace-linear",
	});
}

export default Component;
