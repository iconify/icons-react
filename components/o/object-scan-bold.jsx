import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1waajdcr.css';
import '../../css/q/qp572b-9o.css';
import '../../css/c/c0a3l760t.css';
import '../../css/f/f-g36kx1u.css';
import '../../css/x/xxp_wr0pi.css';
import '../../css/y/yll8_0mvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l1waajdcr"/><path class="qp572b-9o"/><path class="c0a3l760t"/><path class="f-g36kx1u"/><path class="xxp_wr0pi"/><path class="yll8_0mvv"/></g>`,
		"fallback": "solar:object-scan-bold",
	});
}

export default Component;
