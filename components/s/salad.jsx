import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vx_j8ltpn.css';
import '../../css/x/xicol5bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vx_j8ltpn"/><path class="xicol5bjg"/></g>`,
		"fallback": "hugeicons:salad",
	});
}

export default Component;
