import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8oli-e-g.css';
import '../../css/n/nf2-fkbdx.css';
import '../../css/v/v9vsj_bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8oli-e-g"/><path clip-rule="evenodd" class="nf2-fkbdx"/><path clip-rule="evenodd" class="v9vsj_bvv"/></g>`,
		"fallback": "griddy-icons:lion",
	});
}

export default Component;
