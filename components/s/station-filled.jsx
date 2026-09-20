import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvw30zhji.css';
import '../../css/r/rpm6pjbrs.css';
import '../../css/y/y4d60-b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvw30zhji"/><path class="rpm6pjbrs"/><path clip-rule="evenodd" class="y4d60-b-d"/></g>`,
		"fallback": "reicon:station-filled",
	});
}

export default Component;
