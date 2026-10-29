import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n_5e0ub-q.css';
import '../../css/g/g5c0xl14p.css';
import '../../css/g/g025w5bfv.css';
import '../../css/c/crxwkibzs.css';
import '../../css/y/yz09l_ndw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n_5e0ub-q wm-deco"/><path class="g5c0xl14p wm-deco"/><path class="g025w5bfv wm-k"/><path class="crxwkibzs wm-a"/><path class="wm-k yz09l_ndw"/></g>`,
		"fallback": "withicons:table-of-contents-blueprint",
	});
}

export default Component;
