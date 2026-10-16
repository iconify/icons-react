import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m15c5fbvp.css';
import '../../css/t/ttuct8b2z.css';
import '../../css/u/uf8btlb9f.css';
import '../../css/k/k3znhpbwe.css';
import '../../css/l/l-lggsb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(-1 0 0 1 17.06 6.94)" class="m15c5fbvp"/><circle transform="matrix(-1 0 0 1 6.77 2.83)" class="ttuct8b2z"/><circle transform="matrix(-1 0 0 1 21.27 17.06)" class="ttuct8b2z"/><circle transform="matrix(-1 0 0 1 17.06 6.94)" class="uf8btlb9f"/><circle transform="matrix(-1 0 0 1 6.77 2.83)" class="k3znhpbwe"/><circle transform="matrix(-1 0 0 1 21.27 17.06)" class="k3znhpbwe"/><path class="l-lggsb1s"/></g>`,
		"fallback": "andrsrxn:solar-system",
	});
}

export default Component;
