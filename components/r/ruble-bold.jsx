import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sm_g_6ejw.css';
import '../../css/d/dhiirudxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sm_g_6ejw"/><path clip-rule="evenodd" class="dhiirudxo"/></g>`,
		"fallback": "solar:ruble-bold",
	});
}

export default Component;
