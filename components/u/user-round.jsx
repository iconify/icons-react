import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/co_2_5b_i.css';
import '../../css/r/ro-3r1b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="co_2_5b_i"/><path class="ro-3r1b2e"/></g>`,
		"fallback": "hugeicons:user-round",
	});
}

export default Component;
