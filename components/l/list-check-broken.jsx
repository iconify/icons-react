import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mlaq8tbmp.css';
import '../../css/v/v3bnzubkl.css';
import '../../css/s/s5xpay_7j.css';
import '../../css/t/tnwts_9gl.css';
import '../../css/a/a2rh-x5uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mlaq8tbmp"/><path class="v3bnzubkl"/><path class="s5xpay_7j"/><path class="tnwts_9gl"/><path class="a2rh-x5uk"/></g>`,
		"fallback": "solar:list-check-broken",
	});
}

export default Component;
