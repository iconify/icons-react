import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u4_s0wb5m.css';
import '../../css/b/bj_g9yogd.css';
import '../../css/u/u62sohwld.css';
import '../../css/q/q9xtwf46y.css';
import '../../css/g/gjxuf9bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u4_s0wb5m"/><path class="bj_g9yogd"/><path class="u62sohwld"/><path class="q9xtwf46y"/><path class="gjxuf9bws"/></g>`,
		"fallback": "solar:pin-list-broken",
	});
}

export default Component;
