import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sl1yrokbv.css';
import '../../css/o/om1429c5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sl1yrokbv"/><path class="om1429c5v"/></g>`,
		"fallback": "reicon:structure-duotone",
	});
}

export default Component;
