import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spcod9vyn.css';
import '../../css/o/oq6oi4s8v.css';
import '../../css/d/dceys5bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spcod9vyn"/><path class="oq6oi4s8v"/><path clip-rule="evenodd" class="dceys5bmk"/></g>`,
		"fallback": "reicon:tuning-square-duotone",
	});
}

export default Component;
