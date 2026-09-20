import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kg8qh2bhc.css';
import '../../css/g/g_m248b8z.css';
import '../../css/t/tely9lb-g.css';
import '../../css/y/y4yl88bpn.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kg8qh2bhc"/><path clip-rule="evenodd" class="g_m248b8z"/><path clip-rule="evenodd" class="tely9lb-g"/><path class="y4yl88bpn"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:internet-off",
	});
}

export default Component;
