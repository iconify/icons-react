import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqzqcbbfi.css';
import '../../css/q/q1af_wb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lqzqcbbfi"/><path class="q1af_wb5v"/></g>`,
		"fallback": "hugeicons:vision",
	});
}

export default Component;
