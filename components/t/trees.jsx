import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q9vqqg3uc.css';
import '../../css/i/ind7lkbgs.css';
import '../../css/u/u0k_e_b5k.css';
import '../../css/s/swkiuumwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q9vqqg3uc"/><path class="ind7lkbgs"/><path class="u0k_e_b5k"/><path class="swkiuumwe"/></g>`,
		"fallback": "iconaut:trees",
	});
}

export default Component;
