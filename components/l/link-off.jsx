import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk3npnbkm.css';
import '../../css/r/r4q08ucsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk3npnbkm"/><path class="r4q08ucsg"/></g>`,
		"fallback": "andrsrxn:link-off",
	});
}

export default Component;
