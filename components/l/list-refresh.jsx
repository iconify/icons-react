import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg7bucc1h.css';
import '../../css/c/c9uff_rkf.css';
import '../../css/v/vn4t1bcsj.css';
import '../../css/x/x_-029b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rg7bucc1h"/><path clip-rule="evenodd" class="c9uff_rkf"/><path class="vn4t1bcsj"/><path class="x_-029b8v"/></g>`,
		"fallback": "andrsrxn:list-refresh",
	});
}

export default Component;
