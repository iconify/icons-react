import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b_caghbdg.css';
import '../../css/k/knajff6tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b_caghbdg"/><path class="knajff6tb"/></g>`,
		"fallback": "hugeicons:travel-bag",
	});
}

export default Component;
