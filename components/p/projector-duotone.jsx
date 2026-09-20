import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-o1p6w1m.css';
import '../../css/n/n21bf1bpn.css';
import '../../css/e/es26l_lfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-o1p6w1m"/><path clip-rule="evenodd" class="n21bf1bpn"/><path class="es26l_lfc"/></g>`,
		"fallback": "reicon:projector-duotone",
	});
}

export default Component;
