import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r_kmw_yut.css';
import '../../css/z/zv97pxbdl.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r_kmw_yut"/><path class="zv97pxbdl"/><circle class="ptvu1u_4n"/></g>`,
		"fallback": "solar:point-on-map-line-duotone",
	});
}

export default Component;
