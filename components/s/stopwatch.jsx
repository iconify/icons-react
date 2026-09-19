import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0tw6cgdy.css';
import '../../css/u/ulb-efbul.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0tw6cgdy"/><path class="ulb-efbul"/></g>`,
		"fallback": "bi:stopwatch",
	});
}

export default Component;
