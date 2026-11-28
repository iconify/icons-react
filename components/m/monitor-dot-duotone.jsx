import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7_la9d4m.css';
import '../../css/r/r49epb4fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s7_la9d4m secondary"/><path class="primary r49epb4fb"/></g>`,
		"fallback": "iconaut:monitor-dot-duotone",
	});
}

export default Component;
