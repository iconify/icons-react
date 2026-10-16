import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9jra-b1x.css';
import '../../css/r/rip13dblj.css';
import '../../css/l/lwby7j4_w.css';
import '../../css/p/pvkwo7fac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9jra-b1x"/><path class="rip13dblj"/><rect transform="matrix(-1 0 0 1 13.9 5.53)" class="lwby7j4_w"/><path class="pvkwo7fac"/></g>`,
		"fallback": "andrsrxn:mouse-down",
	});
}

export default Component;
