import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lp8o_cbul.css';
import '../../css/b/b7h3obcxu.css';
import '../../css/p/pdsejf_aq.css';
import '../../css/c/ck7mqgwyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lp8o_cbul"/><path class="b7h3obcxu"/><path class="pdsejf_aq"/><path class="ck7mqgwyd"/></g>`,
		"fallback": "solar:watch-round-broken",
	});
}

export default Component;
