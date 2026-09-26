import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ll_t976_m.css';
import '../../css/b/bp9f0acyy.css';
import '../../css/i/i1rjgtlrr.css';
import '../../css/h/hrpb3z6mg.css';
import '../../css/m/meafjacfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ll_t976_m"/><path class="bp9f0acyy"/><path class="i1rjgtlrr"/><path class="hrpb3z6mg"/><path class="meafjacfv"/></g>`,
		"fallback": "solar:list-collapse-minimalistic-line-duotone",
	});
}

export default Component;
