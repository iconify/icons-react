import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzz_4hbyy.css';
import '../../css/q/qp572b-9o.css';
import '../../css/g/g5q6cebrd.css';
import '../../css/x/xxp_wr0pi.css';
import '../../css/d/d5hyjrbbv.css';
import '../../css/b/b-sw5v8qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzz_4hbyy"/><path class="qp572b-9o"/><path class="g5q6cebrd"/><path class="xxp_wr0pi"/><path class="d5hyjrbbv"/><path class="b-sw5v8qr"/></g>`,
		"fallback": "solar:object-scan-bold-duotone",
	});
}

export default Component;
