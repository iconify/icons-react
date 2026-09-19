import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/la_v_lbyo.css';
import '../../css/t/tj3-sfldn.css';
import '../../css/r/rhxe-ug5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="la_v_lbyo"/><path class="tj3-sfldn"/><path class="rhxe-ug5q"/></g>`,
		"fallback": "hugeicons:touch-10",
	});
}

export default Component;
