import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtudc5aqg.css';
import '../../css/f/fthlceekr.css';
import '../../css/m/m0xpkndgg.css';
import '../../css/d/dabhqx2gp.css';
import '../../css/z/zqp9xwbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rtudc5aqg"/><path class="fthlceekr"/><path class="m0xpkndgg"/><path class="dabhqx2gp"/><path class="zqp9xwbru"/></g>`,
		"fallback": "solar:leaf-bold",
	});
}

export default Component;
