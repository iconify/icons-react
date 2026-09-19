import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7g_l_b0t.css';
import '../../css/l/l1d84gb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7g_l_b0t"/><path class="l1d84gb3h"/></g>`,
		"fallback": "iconamoon:send-duotone",
	});
}

export default Component;
