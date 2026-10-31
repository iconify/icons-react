import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bpzb5ebjn.css';
import '../../css/c/ctynhw5wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bpzb5ebjn"/><path class="ctynhw5wp"/></g>`,
		"fallback": "coolicons:mobile-download-corner-bulk-round",
	});
}

export default Component;
