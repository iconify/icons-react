import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qcd_u_w0l.css';
import '../../css/d/dork1d00k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="qcd_u_w0l"/><path class="dork1d00k"/></g>`,
		"fallback": "si:ticket-line",
	});
}

export default Component;
