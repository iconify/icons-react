import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twonex54g.css';
import '../../css/n/n2l517b2s.css';
import '../../css/t/tb3qgualm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-45 31.81 1.72)scale(1 -1)" class="twonex54g"/><rect transform="rotate(-45 31.81 1.72)scale(1 -1)" class="n2l517b2s"/><path class="tb3qgualm"/></g>`,
		"fallback": "andrsrxn:ruler",
	});
}

export default Component;
