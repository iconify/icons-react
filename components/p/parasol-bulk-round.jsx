import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tukm_3_kn.css';
import '../../css/i/ie6gpq1_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tukm_3_kn"/><path class="ie6gpq1_k"/></g>`,
		"fallback": "coolicons:parasol-bulk-round",
	});
}

export default Component;
