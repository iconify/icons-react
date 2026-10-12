import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qx0qkv-zt.css';
import '../../css/e/ei4ae6x7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.29)scale(-1 1)" class="qx0qkv-zt"/><path class="ei4ae6x7p"/></g>`,
		"fallback": "andrsrxn:scan",
	});
}

export default Component;
