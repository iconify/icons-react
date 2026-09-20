import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/rbjrgob2r.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';
import '../../css/o/op1q6lnqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="op1q6lnqg"/></g>`,
		"fallback": "solar:list-arrow-up-linear",
	});
}

export default Component;
