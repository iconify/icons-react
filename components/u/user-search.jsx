import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/t/tbbzplh7l.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/p/pyvef_bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="tbbzplh7l"/><path class="vzkhs6b9b"/><path class="pyvef_bnq"/></g>`,
		"fallback": "andrsrxn:user-search",
	});
}

export default Component;
