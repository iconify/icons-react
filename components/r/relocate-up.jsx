import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbd_nnbdb.css';
import '../../css/z/zny7gdc8o.css';
import '../../css/d/dv4r3_b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbd_nnbdb"/><path class="zny7gdc8o"/><path class="dv4r3_b5t"/></g>`,
		"fallback": "andrsrxn:relocate-up",
	});
}

export default Component;
