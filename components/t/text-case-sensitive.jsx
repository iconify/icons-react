import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ufcwscb_k.css';
import '../../css/j/j_-3_octb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ufcwscb_k"/><path class="j_-3_octb"/></g>`,
		"fallback": "andrsrxn:text-case-sensitive",
	});
}

export default Component;
