import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4dcq5bhm.css';
import '../../css/i/i4sh_9yea.css';
import '../../css/r/rblznoj2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u4dcq5bhm"/><path class="i4sh_9yea"/><path class="rblznoj2v"/></g>`,
		"fallback": "andrsrxn:sim-card-one",
	});
}

export default Component;
