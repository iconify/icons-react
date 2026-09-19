import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hobybv69e.css';
import '../../css/b/b4_ybwbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hobybv69e"/><path class="b4_ybwbcl"/></g>`,
		"fallback": "hugeicons:paint-brush-04",
	});
}

export default Component;
