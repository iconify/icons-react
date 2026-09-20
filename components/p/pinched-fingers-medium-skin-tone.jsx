import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svpp31cxu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fa88bgb4m.css';
import '../../css/v/vcucsobgw.css';
import '../../css/x/xznri3bpy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svpp31cxu"/><g class="jn8qy4bru"><path class="fa88bgb4m"/><path class="vcucsobgw"/><path class="xznri3bpy"/></g>`,
		"fallback": "openmoji:pinched-fingers-medium-skin-tone",
	});
}

export default Component;
