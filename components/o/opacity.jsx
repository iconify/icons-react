import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vawjih8tq.css';
import '../../css/c/ct2apyu-c.css';
import '../../css/h/h27vhbcct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vawjih8tq"/><path class="ct2apyu-c"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/></g>`,
		"fallback": "andrsrxn:opacity",
	});
}

export default Component;
