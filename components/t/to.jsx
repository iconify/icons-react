import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9e5p0ztk.css';
import '../../css/r/rqy006bbg.css';
import '../../css/o/olncy78qd.css';
import '../../css/t/thpjzbb9p.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9e5p0ztk"/><path class="rqy006bbg"/><path class="olncy78qd"/><path class="thpjzbb9p"/></g>`,
		"fallback": "cif:to",
	});
}

export default Component;
