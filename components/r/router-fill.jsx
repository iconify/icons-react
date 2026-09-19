import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ef3-cibdz.css';
import '../../css/x/xdmzabbfw.css';
import '../../css/b/b_ft15bzc.css';
import '../../css/h/hekowkhvg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ef3-cibdz"/><path class="xdmzabbfw"/><path class="b_ft15bzc"/><path class="hekowkhvg"/></g>`,
		"fallback": "bi:router-fill",
	});
}

export default Component;
