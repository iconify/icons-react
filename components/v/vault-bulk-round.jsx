import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k_z_r3y3f.css';
import '../../css/a/aib9okb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k_z_r3y3f"/><path class="aib9okb5v"/></g>`,
		"fallback": "coolicons:vault-bulk-round",
	});
}

export default Component;
