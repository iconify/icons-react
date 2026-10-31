import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rb_yrwbfa.css';
import '../../css/r/rg7pmxk_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rb_yrwbfa"/><path class="rg7pmxk_j"/></g>`,
		"fallback": "coolicons:server-off-duotone-round",
	});
}

export default Component;
