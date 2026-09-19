import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgq9s-_5c.css';
import '../../css/k/kg6whmtsp.css';
import '../../css/x/x_c_7bkus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vgq9s-_5c"/><path clip-rule="evenodd" class="kg6whmtsp"/><path clip-rule="evenodd" class="x_c_7bkus"/></g>`,
		"fallback": "pepicons:key-print",
	});
}

export default Component;
