import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9gljhbwf.css';
import '../../css/w/w1e--ob_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e9gljhbwf"/><path class="w1e--ob_u"/></g>`,
		"fallback": "andrsrxn:text-replace",
	});
}

export default Component;
