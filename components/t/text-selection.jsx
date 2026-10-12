import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ap3-q4b9r.css';
import '../../css/q/qrfdry-dg.css';
import '../../css/p/piv1leb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ap3-q4b9r"/><path class="qrfdry-dg"/><path class="piv1leb6n"/></g>`,
		"fallback": "andrsrxn:text-selection",
	});
}

export default Component;
