import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vawjih8tq.css';
import '../../css/h/h27vhbcct.css';
import '../../css/x/xzdgljtcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vawjih8tq"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><path class="xzdgljtcb"/></g>`,
		"fallback": "andrsrxn:text-circle",
	});
}

export default Component;
