import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxedqu1nr.css';
import '../../css/b/bvd0_4ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sxedqu1nr"/><path class="bvd0_4ben"/></g>`,
		"fallback": "reicon:phone3-duotone",
	});
}

export default Component;
