import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gury2hb9z.css';
import '../../css/e/eqwkp0boz.css';
import '../../css/h/hmvp54drn.css';
import '../../css/k/k1_962ipp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gury2hb9z"/><path class="eqwkp0boz"/><path class="hmvp54drn"/><path class="k1_962ipp"/></g>`,
		"fallback": "andrsrxn:tag",
	});
}

export default Component;
