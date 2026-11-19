import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lohtn_b8c.css';
import '../../css/s/sxqrc8bgf.css';
import '../../css/e/e932pzb0e.css';
import '../../css/w/weeybfgxm.css';
import '../../css/w/wberp_b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lohtn_b8c"/><path class="sxqrc8bgf"/><path class="e932pzb0e"/><path class="weeybfgxm"/><path class="wberp_b3p"/></g>`,
		"fallback": "andrsrxn:lock-key",
	});
}

export default Component;
