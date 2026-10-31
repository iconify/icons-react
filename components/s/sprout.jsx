import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnj4lnfuv.css';
import '../../css/h/hhqrihbhb.css';
import '../../css/t/trlkmhb6j.css';
import '../../css/p/pbeo9cbbn.css';
import '../../css/e/e88pxhb9z.css';
import '../../css/s/s0te-3bds.css';
import '../../css/f/fo4a7pbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bnj4lnfuv wm-k"/><path class="hhqrihbhb wm-deco"/><path class="trlkmhb6j wm-k"/><path class="pbeo9cbbn wm-k"/><path class="e88pxhb9z wm-shadow"/><path class="s0te-3bds wm-shine"/><path class="fo4a7pbia wm-shine"/></g>`,
		"fallback": "withicons-valentine:sprout",
	});
}

export default Component;
