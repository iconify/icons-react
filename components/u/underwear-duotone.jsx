import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flxtbsbnp.css';
import '../../css/d/dhifk0bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="flxtbsbnp secondary"/><path class="dhifk0bxd primary"/></g>`,
		"fallback": "iconaut:underwear-duotone",
	});
}

export default Component;
