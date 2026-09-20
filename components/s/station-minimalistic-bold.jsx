import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcke6rbgw.css';
import '../../css/x/xkxu1ibgd.css';
import '../../css/r/r_13o9i8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcke6rbgw"/><path class="xkxu1ibgd"/><path clip-rule="evenodd" class="r_13o9i8m"/></g>`,
		"fallback": "solar:station-minimalistic-bold",
	});
}

export default Component;
