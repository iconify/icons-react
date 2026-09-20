import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osl2pacnv.css';
import '../../css/p/pgeiwdbwc.css';
import '../../css/w/wnbm9ubwr.css';
import '../../css/z/z8y5cubeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="osl2pacnv"/><path class="pgeiwdbwc"/><path class="wnbm9ubwr"/><path class="z8y5cubeq"/></g>`,
		"fallback": "solar:suitcase-lines-bold-duotone",
	});
}

export default Component;
