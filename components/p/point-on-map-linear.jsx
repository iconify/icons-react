import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bsi142u7b.css';
import '../../css/z/zv97pxbdl.css';
import '../../css/q/q4m7tjd5h.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bsi142u7b"/><path class="zv97pxbdl"/><path class="q4m7tjd5h"/><circle class="ptvu1u_4n"/></g>`,
		"fallback": "solar:point-on-map-linear",
	});
}

export default Component;
