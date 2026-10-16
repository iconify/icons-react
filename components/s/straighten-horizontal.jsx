import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zics27bpw.css';
import '../../css/r/r0peebc-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zics27bpw"/><path class="r0peebc-a"/></g>`,
		"fallback": "andrsrxn:straighten-horizontal",
	});
}

export default Component;
