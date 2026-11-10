import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uu3a6zb2r.css';
import '../../css/g/g6fj2t6ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uu3a6zb2r"/><path class="g6fj2t6ag"/></g>`,
		"fallback": "andrsrxn:reorder-up",
	});
}

export default Component;
