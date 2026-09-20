import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdpl1_b6g.css';
import '../../css/n/nxl56yepe.css';
import '../../css/h/h5aa40bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdpl1_b6g"/><path clip-rule="evenodd" class="nxl56yepe"/><path class="h5aa40bhg"/></g>`,
		"fallback": "reicon:radio2-duotone",
	});
}

export default Component;
