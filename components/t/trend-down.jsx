import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m90soxk8s.css';
import '../../css/w/wclbhx8-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m90soxk8s"/><path class="wclbhx8-z"/></g>`,
		"fallback": "andrsrxn:trend-down",
	});
}

export default Component;
