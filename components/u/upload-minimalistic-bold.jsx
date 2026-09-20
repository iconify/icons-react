import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fva-g3bbh.css';
import '../../css/s/s_i4rcbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fva-g3bbh"/><path class="s_i4rcbgw"/></g>`,
		"fallback": "solar:upload-minimalistic-bold",
	});
}

export default Component;
