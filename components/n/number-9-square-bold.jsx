import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uugya3_un.css';
import '../../css/w/w_z_vxbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uugya3_un"/><path class="w_z_vxbmd"/></g>`,
		"fallback": "iconamoon:number-9-square-bold",
	});
}

export default Component;
