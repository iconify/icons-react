import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jyi2bpmjg.css';
import '../../css/o/o6ti4ybpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jyi2bpmjg"/><path clip-rule="evenodd" class="o6ti4ybpo"/></g>`,
		"fallback": "reicon:money-wave",
	});
}

export default Component;
