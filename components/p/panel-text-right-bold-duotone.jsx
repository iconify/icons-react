import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_my74bgw.css';
import '../../css/y/yt_o5acxv.css';
import '../../css/n/ntaqpcc_z.css';
import '../../css/g/gc5p9wbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y_my74bgw"/><path class="yt_o5acxv"/><path class="ntaqpcc_z"/><path class="gc5p9wbhd"/></g>`,
		"fallback": "solar:panel-text-right-bold-duotone",
	});
}

export default Component;
