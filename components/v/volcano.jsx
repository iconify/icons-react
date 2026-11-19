import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xeyn0hbmx.css';
import '../../css/z/zm4gp_b_k.css';
import '../../css/b/bd526db5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xeyn0hbmx"/><path class="zm4gp_b_k"/><path class="bd526db5h"/></g>`,
		"fallback": "andrsrxn:volcano",
	});
}

export default Component;
