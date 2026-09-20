import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rh_tk0k0z.css';
import '../../css/z/zw-zdnb-k.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rh_tk0k0z"/><path clip-rule="evenodd" class="zw-zdnb-k"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:moon-off",
	});
}

export default Component;
