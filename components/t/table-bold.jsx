import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iua8b2bjg.css';
import '../../css/s/s7875pb6y.css';
import '../../css/c/c6jwui2yk.css';
import '../../css/b/bnz1etbsq.css';
import '../../css/y/ykk1_gx4n.css';
import '../../css/t/tu2k-znyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iua8b2bjg"/><path class="s7875pb6y"/><path class="c6jwui2yk"/><path class="bnz1etbsq"/><path class="ykk1_gx4n"/><path class="tu2k-znyw"/></g>`,
		"fallback": "solar:table-bold",
	});
}

export default Component;
