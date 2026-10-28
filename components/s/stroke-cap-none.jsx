import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lir_j1b0g.css';
import '../../css/u/uzqmi5byr.css';
import '../../css/x/xp7oowxwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lir_j1b0g"/><path class="uzqmi5byr"/><path class="xp7oowxwl"/></g>`,
		"fallback": "andrsrxn:stroke-cap-none",
	});
}

export default Component;
