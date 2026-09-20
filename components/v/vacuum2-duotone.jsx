import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffiiy4qkf.css';
import '../../css/c/c0_inmbrs.css';
import '../../css/m/m5_rub7qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ffiiy4qkf"/><path class="c0_inmbrs"/><path clip-rule="evenodd" class="m5_rub7qo"/></g>`,
		"fallback": "reicon:vacuum2-duotone",
	});
}

export default Component;
