import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk9prbcbl.css';
import '../../css/y/y21gcmbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pk9prbcbl"/><path class="y21gcmbkk"/></g>`,
		"fallback": "coolicons:tree-pine-duotone-round",
	});
}

export default Component;
