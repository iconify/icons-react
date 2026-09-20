import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mhy19cc_w.css';
import '../../css/l/lx9et69ph.css';
import '../../css/e/e_onljbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mhy19cc_w"/><path class="lx9et69ph"/><path class="e_onljbso"/></g>`,
		"fallback": "solar:printer-minimalistic-bold",
	});
}

export default Component;
