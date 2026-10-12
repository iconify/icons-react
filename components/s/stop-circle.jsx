import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spv5scqae.css';
import '../../css/h/h27vhbcct.css';
import '../../css/x/x9icenx_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="spv5scqae"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><rect transform="rotate(90 0 16.74)scale(-1 1)" class="x9icenx_j"/></g>`,
		"fallback": "andrsrxn:stop-circle",
	});
}

export default Component;
