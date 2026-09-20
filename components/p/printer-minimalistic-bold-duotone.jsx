import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mhy19cc_w.css';
import '../../css/e/e_onljbso.css';
import '../../css/w/wdscbgf6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mhy19cc_w"/><path class="e_onljbso"/><path class="wdscbgf6x"/></g>`,
		"fallback": "solar:printer-minimalistic-bold-duotone",
	});
}

export default Component;
