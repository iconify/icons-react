import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm3o83b0v.css';
import '../../css/p/p6m21qb0z.css';
import '../../css/l/l6-1ppbik.css';
import '../../css/l/l_p-62bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hm3o83b0v"/><path class="p6m21qb0z"/><path class="l6-1ppbik"/><path class="l_p-62bbf"/></g>`,
		"fallback": "andrsrxn:keyboard-right",
	});
}

export default Component;
