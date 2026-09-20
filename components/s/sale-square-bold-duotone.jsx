import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/g/gw3k3_70f.css';
import '../../css/c/c8u9_eljn.css';
import '../../css/p/p2_bw9bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="gw3k3_70f"/><path class="c8u9_eljn"/><path class="p2_bw9bde"/></g>`,
		"fallback": "solar:sale-square-bold-duotone",
	});
}

export default Component;
