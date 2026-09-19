import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tujn_spmu.css';
import '../../css/m/mtye64rww.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tujn_spmu"/><path class="mtye64rww"/></g>`,
		"fallback": "bi:rewind-fill",
	});
}

export default Component;
