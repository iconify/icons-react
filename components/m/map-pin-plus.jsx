import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjd8thbtd.css';
import '../../css/u/uklpn6vyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jjd8thbtd"/><path class="uklpn6vyl"/></g>`,
		"fallback": "andrsrxn:map-pin-plus",
	});
}

export default Component;
