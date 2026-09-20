import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nvf9vrbds.css';
import '../../css/f/fa1zc_bfw.css';
import '../../css/f/fe0h04b0a.css';
import '../../css/l/lj54e5b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nvf9vrbds"/><path class="fa1zc_bfw"/><path class="fe0h04b0a"/><path class="lj54e5b6a"/></g>`,
		"fallback": "solar:unlink-minimalistic-bold",
	});
}

export default Component;
