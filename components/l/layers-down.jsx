import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mem9vebuf.css';
import '../../css/k/k_3pzibfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mem9vebuf"/><path class="k_3pzibfw"/></g>`,
		"fallback": "andrsrxn:layers-down",
	});
}

export default Component;
