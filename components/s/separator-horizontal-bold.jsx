import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjdu56bfc.css';
import '../../css/t/tds357sde.css';
import '../../css/m/m2_y5b4pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zjdu56bfc"/><path class="tds357sde"/><path class="m2_y5b4pz"/></g>`,
		"fallback": "solar:separator-horizontal-bold",
	});
}

export default Component;
