import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xi1riwksk.css';
import '../../css/d/dhmtdsb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xi1riwksk"/><path class="dhmtdsb-b"/></g>`,
		"fallback": "hugeicons:leetcode",
	});
}

export default Component;
