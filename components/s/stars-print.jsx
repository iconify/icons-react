import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/w/wb4xr1bwq.css';
import '../../css/y/yp_s0lbdu.css';
import '../../css/c/cds427bhl.css';
import '../../css/o/oj2ucbc0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="wb4xr1bwq"/><path class="yp_s0lbdu"/></g><path clip-rule="evenodd" class="cds427bhl"/><path class="oj2ucbc0c"/></g>`,
		"fallback": "pepicons:stars-print",
	});
}

export default Component;
