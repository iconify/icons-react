import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zv2nn_bwf.css';
import '../../css/j/jwikj1bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zv2nn_bwf"/><path class="jwikj1bfu"/></g>`,
		"fallback": "coolicons:paper-plane-bulk-round",
	});
}

export default Component;
