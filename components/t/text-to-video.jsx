import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8vt3rbpd.css';
import '../../css/w/w5h87ub2h.css';
import '../../css/r/rtuut-30x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u8vt3rbpd"/><rect transform="matrix(0 -1 -1 0 22.49 20.27)" class="w5h87ub2h"/><path class="rtuut-30x"/></g>`,
		"fallback": "andrsrxn:text-to-video",
	});
}

export default Component;
