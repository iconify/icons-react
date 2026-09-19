import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lq73idbwi.css';
import '../../css/w/wlbr5cbsv.css';
import '../../css/u/uj-9c3b5e.css';
import '../../css/u/ucxvrob9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lq73idbwi"/><path class="wlbr5cbsv"/><path class="uj-9c3b5e"/><path class="ucxvrob9l"/></g>`,
		"fallback": "hugeicons:quran-02",
	});
}

export default Component;
