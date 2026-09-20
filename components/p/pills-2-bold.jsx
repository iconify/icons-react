import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxzk20b5v.css';
import '../../css/q/qo6_w36xr.css';
import '../../css/s/sny6ugutg.css';
import '../../css/v/vf2x5z-cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pxzk20b5v"/><path class="qo6_w36xr"/><path class="sny6ugutg"/><path class="vf2x5z-cn"/></g>`,
		"fallback": "solar:pills-2-bold",
	});
}

export default Component;
