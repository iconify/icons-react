import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srkaupbeq.css';
import '../../css/h/hl2620bhw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="srkaupbeq"/><path class="hl2620bhw"/></g>`,
		"fallback": "bi:outlet",
	});
}

export default Component;
