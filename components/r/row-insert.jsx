import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e2agazbhd.css';
import '../../css/v/v_3gm9b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e2agazbhd"/><path class="v_3gm9b6z"/></g>`,
		"fallback": "hugeicons:row-insert",
	});
}

export default Component;
