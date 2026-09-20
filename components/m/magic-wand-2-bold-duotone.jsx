import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1dfv4b9x.css';
import '../../css/o/o6m02gb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y1dfv4b9x"/><path class="o6m02gb4m"/></g>`,
		"fallback": "solar:magic-wand-2-bold-duotone",
	});
}

export default Component;
