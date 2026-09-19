import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vtmphkbxs.css';
import '../../css/y/ypen9ccxg.css';
import '../../css/q/q7ftzha2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vtmphkbxs"/><path class="ypen9ccxg"/><path class="q7ftzha2o"/></g>`,
		"fallback": "hugeicons:t-shirt",
	});
}

export default Component;
