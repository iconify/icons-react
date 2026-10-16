import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg0dq4bxe.css';
import '../../css/n/ngz6222nx.css';
import '../../css/x/x5gyftlbq.css';
import '../../css/t/ttc_v_kjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.28 22.26)" class="sg0dq4bxe"/><rect transform="matrix(0 -1 -1 0 22.28 22.26)" class="ngz6222nx"/><path class="x5gyftlbq"/><path class="ttc_v_kjv"/></g>`,
		"fallback": "andrsrxn:keyboard-up",
	});
}

export default Component;
