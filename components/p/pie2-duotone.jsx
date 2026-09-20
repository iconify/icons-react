import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1fyt_btz.css';
import '../../css/e/eak973bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g1fyt_btz"/><path class="eak973bgk"/></g>`,
		"fallback": "reicon:pie2-duotone",
	});
}

export default Component;
