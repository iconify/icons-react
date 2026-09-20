import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymzgagbhy.css';
import '../../css/f/fvsg3rbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ymzgagbhy"/><path class="fvsg3rbvt"/></g>`,
		"fallback": "reicon:list-arrow-up2-duotone",
	});
}

export default Component;
