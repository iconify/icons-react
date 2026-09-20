import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pdsejf_aq.css';
import '../../css/c/ck7mqgwyd.css';
import '../../css/w/w37drss5a.css';
import '../../css/b/b7h3obcxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pdsejf_aq"/><path class="ck7mqgwyd"/><path class="w37drss5a"/><path class="b7h3obcxu"/></g>`,
		"fallback": "solar:watch-round-linear",
	});
}

export default Component;
