import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t91_4abcv.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/uv-otpbcn.css';
import '../../css/m/mhsc17o4r.css';
import '../../css/l/l63r2cc5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t91_4abcv"/><g class="mc2zb0bvp"><path class="uv-otpbcn"/><path class="mhsc17o4r"/><path class="l63r2cc5g"/></g></g>`,
		"fallback": "solar:list-vertical-bold-duotone",
	});
}

export default Component;
