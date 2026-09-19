import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y0ow5dbmw.css';
import '../../css/z/zrhbv_1yw.css';
import '../../css/h/hnn5ic30w.css';
import '../../css/q/q95ed7l1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y0ow5dbmw"/><path class="zrhbv_1yw"/><path class="hnn5ic30w"/><path class="q95ed7l1b"/></g>`,
		"fallback": "hugeicons:knowledge-02",
	});
}

export default Component;
