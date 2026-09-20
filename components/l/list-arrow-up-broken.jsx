import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';
import '../../css/o/op1q6lnqg.css';
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
		"content": `<g class="ipq1z-bjh"><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="op1q6lnqg"/><path class="tnwts_9gl"/><path class="a2rh-x5uk"/></g>`,
		"fallback": "solar:list-arrow-up-broken",
	});
}

export default Component;
