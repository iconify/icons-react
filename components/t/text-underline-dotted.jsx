import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mon75_bzw.css';
import '../../css/e/ey1_qvbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mon75_bzw"/><path class="ey1_qvbkh"/></g>`,
		"fallback": "andrsrxn:text-underline-dotted",
	});
}

export default Component;
