import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/we3queb0x.css';
import '../../css/b/brktlkbfw.css';
import '../../css/m/m499oobjv.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="we3queb0x"/><path class="brktlkbfw"/><path class="m499oobjv"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`,
		"fallback": "solar:upload-twice-square-outline",
	});
}

export default Component;
