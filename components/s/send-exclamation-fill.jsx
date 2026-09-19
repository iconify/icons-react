import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnpnx-u3q.css';
import '../../css/k/k6w-m32zw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dnpnx-u3q"/><path class="k6w-m32zw"/></g>`,
		"fallback": "bi:send-exclamation-fill",
	});
}

export default Component;
