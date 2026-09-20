import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g5wt_wbci.css';
import '../../css/x/xn-b0acce.css';
import '../../css/a/as2j2k52h.css';
import '../../css/m/m8rlb1beu.css';
import '../../css/w/wvon41boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><rect class="g5wt_wbci"/><path class="xn-b0acce"/><path class="as2j2k52h"/><path class="m8rlb1beu"/><path class="wvon41boo"/></g>`,
		"fallback": "solar:scooter-line-duotone",
	});
}

export default Component;
