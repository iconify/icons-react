import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1u-wleju.css';
import '../../css/m/m6cs0kbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w1u-wleju"/><path class="m6cs0kbou"/></g>`,
		"fallback": "coolicons:playlist-bulk-round",
	});
}

export default Component;
