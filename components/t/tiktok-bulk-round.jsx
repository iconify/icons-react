import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0_njybpv.css';
import '../../css/p/pdkoty56j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0_njybpv"/><path class="pdkoty56j"/></g>`,
		"fallback": "coolicons:tiktok-bulk-round",
	});
}

export default Component;
