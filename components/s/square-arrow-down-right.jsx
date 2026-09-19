import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/i/isnjj2b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jvtjbnueh"/><path class="isnjj2b4m"/></g>`,
		"fallback": "hugeicons:square-arrow-down-right",
	});
}

export default Component;
