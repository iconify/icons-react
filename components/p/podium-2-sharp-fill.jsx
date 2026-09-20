import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d098hyf_v.css';
import '../../css/x/xeb-fib6w.css';
import '../../css/m/mhv0dr0xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d098hyf_v"/><path class="xeb-fib6w"/><path class="mhv0dr0xk"/></g>`,
		"fallback": "keyline-icons:podium-2-sharp-fill",
	});
}

export default Component;
