import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivg_vebxq.css';
import '../../css/i/i_hca-bhh.css';
import '../../css/e/eh_zu7brz.css';
import '../../css/d/dg-nofnle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivg_vebxq"/><path class="i_hca-bhh"/><path class="eh_zu7brz"/><path class="dg-nofnle"/></g>`,
		"fallback": "solar:smartphone-rotate-angle-bold-duotone",
	});
}

export default Component;
