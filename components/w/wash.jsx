import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sm_rodb_l.css';
import '../../css/h/h85zhwblt.css';
import '../../css/y/y6zs55b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sm_rodb_l"/><path class="h85zhwblt"/><path class="y6zs55b9l"/></g>`,
		"fallback": "andrsrxn:wash",
	});
}

export default Component;
