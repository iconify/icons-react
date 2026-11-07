import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/i/iwkxsrlmm.css';
import '../../css/j/j7_95ib_g.css';
import '../../css/l/la_28ccrx.css';
import '../../css/l/lv3m7nwfy.css';
import '../../css/l/lptadmbaq.css';
import '../../css/c/ced0ycc1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="iwkxsrlmm"/><path class="j7_95ib_g"/><path class="la_28ccrx"/><path class="lv3m7nwfy"/><path class="lptadmbaq"/><path class="ced0ycc1z"/></g>`,
		"fallback": "solar:treadmill-broken",
	});
}

export default Component;
