import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llx19_bqv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/s/sxdp1lo8c.css';
import '../../css/a/a74c774yq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llx19_bqv"/><g class="ij2x_72vy"><path class="sxdp1lo8c"/><path class="a74c774yq"/></g>`,
		"fallback": "openmoji:spider-web",
	});
}

export default Component;
