import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/x/xqnh1_l3i.css';
import '../../css/u/upgj87b_s.css';
import '../../css/c/cbieqc0sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="xqnh1_l3i"/><path class="upgj87b_s"/><path class="cbieqc0sr"/></g>`,
		"fallback": "withicons-brutal:parking",
	});
}

export default Component;
