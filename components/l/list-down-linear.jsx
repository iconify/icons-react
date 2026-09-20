import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/rbjrgob2r.css';
import '../../css/v/v3bnzubkl.css';
import '../../css/s/s5xpay_7j.css';
import '../../css/t/tonplxqkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="v3bnzubkl"/><path class="s5xpay_7j"/><path class="tonplxqkt"/></g>`,
		"fallback": "solar:list-down-linear",
	});
}

export default Component;
