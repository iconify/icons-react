import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esbwh55ly.css';
import '../../css/t/t99s0f6ww.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esbwh55ly"/><path class="t99s0f6ww"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`,
		"fallback": "solar:send-square-outline",
	});
}

export default Component;
