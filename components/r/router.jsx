import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/he8tn_r2w.css';
import '../../css/v/v-rjrvbga.css';
import '../../css/t/tzq4wccji.css';
import '../../css/m/m260xpbcn.css';
import '../../css/w/weoa-bcjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="he8tn_r2w"/><rect class="v-rjrvbga"/><path class="tzq4wccji"/><path class="m260xpbcn"/><path class="weoa-bcjm"/></g>`,
		"fallback": "andrsrxn:router",
	});
}

export default Component;
