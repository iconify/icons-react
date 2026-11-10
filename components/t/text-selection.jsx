import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oswk1un1o.css';
import '../../css/g/g_acvkbsy.css';
import '../../css/t/t3i9subxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oswk1un1o"/><path class="g_acvkbsy"/><path class="t3i9subxm"/></g>`,
		"fallback": "andrsrxn:text-selection",
	});
}

export default Component;
