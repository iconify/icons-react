import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/rbjrgob2r.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';
import '../../css/c/c79b8acay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="c79b8acay"/></g>`,
		"fallback": "solar:list-minus-linear",
	});
}

export default Component;
