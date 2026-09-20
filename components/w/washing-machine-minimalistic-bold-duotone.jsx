import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/r/rovr4uxhi.css';
import '../../css/j/ji57vsp8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjq2qh_fp"/><path clip-rule="evenodd" class="rovr4uxhi"/><path class="ji57vsp8s"/></g>`,
		"fallback": "solar:washing-machine-minimalistic-bold-duotone",
	});
}

export default Component;
