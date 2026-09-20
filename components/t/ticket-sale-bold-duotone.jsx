import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/va3-4tb_v.css';
import '../../css/c/cmenmmbqh.css';
import '../../css/p/pyxafgb6o.css';
import '../../css/r/r-zgg0p3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="va3-4tb_v"/><path class="cmenmmbqh"/><path class="pyxafgb6o"/><path class="r-zgg0p3j"/></g>`,
		"fallback": "solar:ticket-sale-bold-duotone",
	});
}

export default Component;
