import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2l6nrkld.css';
import '../../css/s/s7875pb6y.css';
import '../../css/f/flt-a_pfe.css';
import '../../css/t/tu2k-znyw.css';
import '../../css/y/ykk1_gx4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j2l6nrkld"/><path class="s7875pb6y"/><path class="flt-a_pfe"/><path class="tu2k-znyw"/><path class="ykk1_gx4n"/></g>`,
		"fallback": "solar:table-cells-merge-bold",
	});
}

export default Component;
