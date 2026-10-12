import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t_yvalsrp.css';
import '../../css/b/bu-f2cb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t_yvalsrp"/><path class="bu-f2cb3z"/></g>`,
		"fallback": "andrsrxn:trend-up",
	});
}

export default Component;
