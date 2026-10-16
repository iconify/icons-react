import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbldr7b6f.css';
import '../../css/q/q5__bwq3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vbldr7b6f"/><path class="q5__bwq3t"/></g>`,
		"fallback": "andrsrxn:user-female-plus",
	});
}

export default Component;
