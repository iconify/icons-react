import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qu7_qcjgl.css';
import '../../css/i/ip3qm20ze.css';
import '../../css/k/kr99ulpjv.css';
import '../../css/u/u66s-fbqm.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qu7_qcjgl"/><path class="ip3qm20ze"/><path class="kr99ulpjv"/><path class="u66s-fbqm"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "solar:quit-full-screen-circle-linear",
	});
}

export default Component;
