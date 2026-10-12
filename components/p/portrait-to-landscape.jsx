import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzv7a-f0d.css';
import '../../css/e/ey9gwwbqb.css';
import '../../css/z/ztjc-eycb.css';
import '../../css/w/w45v9234z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 11.64 21.34)" class="wzv7a-f0d"/><rect transform="matrix(0 -1 -1 0 11.63 21.34)" class="ey9gwwbqb"/><path class="ztjc-eycb"/><path class="w45v9234z"/></g>`,
		"fallback": "andrsrxn:portrait-to-landscape",
	});
}

export default Component;
