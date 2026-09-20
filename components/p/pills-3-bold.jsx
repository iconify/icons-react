import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuktvobmv.css';
import '../../css/m/mo3q1vkji.css';
import '../../css/x/xv0nadbwq.css';
import '../../css/n/nmn5tpjbj.css';
import '../../css/r/ry2qzlfsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuktvobmv"/><path class="mo3q1vkji"/><path class="xv0nadbwq"/><path class="nmn5tpjbj"/><path class="ry2qzlfsr"/></g>`,
		"fallback": "solar:pills-3-bold",
	});
}

export default Component;
