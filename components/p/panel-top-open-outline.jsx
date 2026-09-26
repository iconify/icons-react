import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvoi0sbek.css';
import '../../css/b/b4vfr_xlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvoi0sbek"/><path clip-rule="evenodd" class="b4vfr_xlj"/></g>`,
		"fallback": "solar:panel-top-open-outline",
	});
}

export default Component;
