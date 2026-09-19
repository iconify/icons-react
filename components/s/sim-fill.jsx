import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2pva4uvz.css';
import '../../css/l/lyhaqtbfs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2pva4uvz"/><path class="lyhaqtbfs"/></g>`,
		"fallback": "bi:sim-fill",
	});
}

export default Component;
