import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m7se3rbus.css';
import '../../css/m/mbz9s6_up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m7se3rbus"/><path class="mbz9s6_up"/></g>`,
		"fallback": "hugeicons:layout-07",
	});
}

export default Component;
