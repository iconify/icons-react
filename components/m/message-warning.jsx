import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i00bmr7ot.css';
import '../../css/r/r_t6j5bpy.css';
import '../../css/t/ti_ojv3av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i00bmr7ot"/><path class="r_t6j5bpy"/><path class="ti_ojv3av"/></g>`,
		"fallback": "andrsrxn:message-warning",
	});
}

export default Component;
