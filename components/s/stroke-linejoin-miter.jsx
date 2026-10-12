import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2r_edcdm.css';
import '../../css/m/mt-o-cafs.css';
import '../../css/m/mdoj1bg5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y2r_edcdm"/><path class="mt-o-cafs"/><path class="mdoj1bg5w"/></g>`,
		"fallback": "andrsrxn:stroke-linejoin-miter",
	});
}

export default Component;
