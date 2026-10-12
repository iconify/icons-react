import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/luv3m6b_d.css';
import '../../css/p/p7mev8a0r.css';
import '../../css/w/wxfi02bkr.css';
import '../../css/v/v6-odob5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="luv3m6b_d"/><rect transform="matrix(0 -1 -1 0 22.29 20.21)" class="p7mev8a0r"/><path class="wxfi02bkr"/><path class="v6-odob5a"/></g>`,
		"fallback": "andrsrxn:wallet",
	});
}

export default Component;
