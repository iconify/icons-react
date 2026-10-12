import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/echeipybo.css';
import '../../css/d/d_88ygb_d.css';
import '../../css/c/cd43_hb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="echeipybo"/><path class="d_88ygb_d"/><path class="cd43_hb_g"/></g>`,
		"fallback": "andrsrxn:parking-off",
	});
}

export default Component;
