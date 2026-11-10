import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hp2v8bbuz.css';
import '../../css/h/hwidkmdhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hp2v8bbuz"/><path class="hwidkmdhi"/></g>`,
		"fallback": "andrsrxn:reorder-down",
	});
}

export default Component;
