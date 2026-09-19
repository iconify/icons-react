import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tl_bl2bka.css';
import '../../css/v/ve3a_2bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tl_bl2bka"/><path class="ve3a_2bdh"/></g>`,
		"fallback": "hugeicons:message-square-dot",
	});
}

export default Component;
