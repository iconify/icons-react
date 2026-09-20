import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oygjb2btm.css';
import '../../css/w/wf82r5bjl.css';
import '../../css/v/vm6fd7g8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oygjb2btm"/><path class="wf82r5bjl"/><path clip-rule="evenodd" class="vm6fd7g8h"/></g>`,
		"fallback": "reicon:search-bug3-duotone",
	});
}

export default Component;
