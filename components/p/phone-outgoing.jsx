import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvyqx1knh.css';
import '../../css/t/tiggr9bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvyqx1knh"/><path class="tiggr9bik"/></g>`,
		"fallback": "andrsrxn:phone-outgoing",
	});
}

export default Component;
