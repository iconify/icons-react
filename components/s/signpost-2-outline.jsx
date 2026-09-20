import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrk3k6bsg.css';
import '../../css/a/aet0jccom.css';
import '../../css/l/lvteyqygg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rrk3k6bsg"/><path class="aet0jccom"/><path clip-rule="evenodd" class="lvteyqygg"/></g>`,
		"fallback": "solar:signpost-2-outline",
	});
}

export default Component;
