import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7v_t9bbz.css';
import '../../css/h/haoflz72k.css';
import '../../css/o/o3nngpgdw.css';
import '../../css/o/o5pgrnbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m7v_t9bbz"/><path clip-rule="evenodd" class="haoflz72k"/><path clip-rule="evenodd" class="o3nngpgdw"/><path class="o5pgrnbwl"/></g>`,
		"fallback": "reicon:router2-duotone",
	});
}

export default Component;
