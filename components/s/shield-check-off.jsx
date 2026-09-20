import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ipzo3qbtp.css';
import '../../css/i/iezb6eb_v.css';
import '../../css/p/pbxa9vb2n.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ipzo3qbtp"/><path clip-rule="evenodd" class="iezb6eb_v"/><path clip-rule="evenodd" class="pbxa9vb2n"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:shield-check-off",
	});
}

export default Component;
