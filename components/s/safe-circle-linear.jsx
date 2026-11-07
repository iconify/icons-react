import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w3r9-bcte.css';
import '../../css/x/xng-4w08c.css';
import '../../css/e/evr7kjbjs.css';
import '../../css/a/a2-o1jt_u.css';
import '../../css/d/d6cn3zbnj.css';
import '../../css/f/fmc_3temv.css';
import '../../css/a/avgpambcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w3r9-bcte"/><path class="xng-4w08c"/><path class="evr7kjbjs"/><path class="a2-o1jt_u"/><path class="d6cn3zbnj"/><path class="fmc_3temv"/><path class="avgpambcj"/></g>`,
		"fallback": "solar:safe-circle-linear",
	});
}

export default Component;
