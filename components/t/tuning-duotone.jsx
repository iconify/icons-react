import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pu9jz0sqq.css';
import '../../css/z/z7tprbbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pu9jz0sqq"/><path class="z7tprbbev"/></g>`,
		"fallback": "reicon:tuning-duotone",
	});
}

export default Component;
