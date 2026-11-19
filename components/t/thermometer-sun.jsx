import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld-j2zbhv.css';
import '../../css/w/wmvgymmly.css';
import '../../css/o/ocqp-1hit.css';
import '../../css/g/g9ib_ukxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ld-j2zbhv"/><path class="wmvgymmly"/><path class="ocqp-1hit"/><path class="g9ib_ukxh"/></g>`,
		"fallback": "andrsrxn:thermometer-sun",
	});
}

export default Component;
