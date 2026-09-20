import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/oq9c_3bzv.css';
import '../../css/t/t_ro0pywx.css';
import '../../css/y/y2t0nnbtb.css';
import '../../css/l/lm3wquboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="oq9c_3bzv"/><path class="t_ro0pywx"/></g><path class="y2t0nnbtb"/><path class="lm3wquboo"/></g>`,
		"fallback": "solar:unlink-minimalistic-bold-duotone",
	});
}

export default Component;
