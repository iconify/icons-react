import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzht2dbcv.css';
import '../../css/u/u_1uu1b_n.css';
import '../../css/t/t2eiaccum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mzht2dbcv"/><path class="u_1uu1b_n"/><path class="t2eiaccum"/></g>`,
		"fallback": "solar:round-transfer-vertical-bold-duotone",
	});
}

export default Component;
