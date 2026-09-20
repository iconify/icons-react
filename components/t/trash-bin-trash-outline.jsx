import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbu_udbmn.css';
import '../../css/x/x2i2qgbmb.css';
import '../../css/p/py0dxib5v.css';
import '../../css/m/myt-e3bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vbu_udbmn"/><path class="x2i2qgbmb"/><path class="py0dxib5v"/><path class="myt-e3bvr"/></g>`,
		"fallback": "solar:trash-bin-trash-outline",
	});
}

export default Component;
