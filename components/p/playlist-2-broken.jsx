import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-nfw68nc.css';
import '../../css/k/k6_m8bb3p.css';
import '../../css/r/rvg1ddc-m.css';
import '../../css/h/hi5e58bpt.css';
import '../../css/o/olcvaabye.css';
import '../../css/k/k3tmy3scv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-nfw68nc"/><path class="k6_m8bb3p"/><path class="rvg1ddc-m"/><path class="hi5e58bpt"/><path class="olcvaabye"/><path class="k3tmy3scv"/></g>`,
		"fallback": "solar:playlist-2-broken",
	});
}

export default Component;
