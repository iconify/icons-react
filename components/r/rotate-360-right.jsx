import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/ql9zaqhxd.css';
import '../../css/q/q3_y4m87i.css';
import '../../css/n/n4i4tkbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse transform="matrix(0 1 1 0 2 8.05)" class="ql9zaqhxd"/><path class="q3_y4m87i"/><path class="n4i4tkbuc"/></g>`,
		"fallback": "andrsrxn:rotate-360-right",
	});
}

export default Component;
