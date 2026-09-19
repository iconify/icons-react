import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6khytbfp.css';
import '../../css/d/dlhy_7b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6khytbfp"/><path class="dlhy_7b_q"/></g>`,
		"fallback": "hugeicons:socks",
	});
}

export default Component;
