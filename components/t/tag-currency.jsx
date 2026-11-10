import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmvp54drn.css';
import '../../css/x/x4-2byb6o.css';
import '../../css/p/p8kaolb4p.css';
import '../../css/t/tbg6xx1_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmvp54drn"/><path class="x4-2byb6o"/><path class="p8kaolb4p"/><path class="tbg6xx1_u"/></g>`,
		"fallback": "andrsrxn:tag-currency",
	});
}

export default Component;
