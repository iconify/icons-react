import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wethgabtb.css';
import '../../css/i/iu_7qrbzv.css';
import '../../css/t/to8rd8orv.css';
import '../../css/p/pbnpm7-9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wethgabtb"/><path clip-rule="evenodd" class="iu_7qrbzv"/><path class="to8rd8orv"/><path class="pbnpm7-9j"/></g>`,
		"fallback": "solar:siren-rounded-bold",
	});
}

export default Component;
