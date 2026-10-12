import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtxg_ccec.css';
import '../../css/l/lcjrtxt6r.css';
import '../../css/f/fc-d_veyo.css';
import '../../css/n/n-svtlblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-135 6.71 13.35)" class="mtxg_ccec"/><rect transform="rotate(-135 15.66 22.3)" class="lcjrtxt6r"/><rect transform="rotate(135 7.298 8.624)scale(-1 1)" class="fc-d_veyo"/><path class="n-svtlblq"/></g>`,
		"fallback": "andrsrxn:pencil-ruler",
	});
}

export default Component;
