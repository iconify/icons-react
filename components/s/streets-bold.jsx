import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/op24dvl4v.css';
import '../../css/h/hbcfabcbl.css';
import '../../css/r/rsqrtukoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="op24dvl4v"/><path class="hbcfabcbl"/><path class="rsqrtukoj"/></g>`,
		"fallback": "solar:streets-bold",
	});
}

export default Component;
