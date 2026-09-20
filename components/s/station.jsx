import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvw30zhji.css';
import '../../css/r/rpm6pjbrs.css';
import '../../css/x/x3am7nbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvw30zhji"/><path class="rpm6pjbrs"/><path clip-rule="evenodd" class="x3am7nbhm"/></g>`,
		"fallback": "reicon:station",
	});
}

export default Component;
