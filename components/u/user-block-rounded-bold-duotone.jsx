import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cc1czgsqt.css';
import '../../css/c/c_zdt_bqs.css';
import '../../css/l/lw_g68b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cc1czgsqt"/><path class="c_zdt_bqs"/><path class="lw_g68b2l"/></g>`,
		"fallback": "solar:user-block-rounded-bold-duotone",
	});
}

export default Component;
