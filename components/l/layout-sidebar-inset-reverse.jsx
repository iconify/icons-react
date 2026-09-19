import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nsdzi8bua.css';
import '../../css/n/nkyr7rb7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nsdzi8bua"/><path class="nkyr7rb7i"/></g>`,
		"fallback": "bi:layout-sidebar-inset-reverse",
	});
}

export default Component;
