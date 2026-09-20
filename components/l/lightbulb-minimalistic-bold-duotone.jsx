import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyjsal-du.css';
import '../../css/k/kwoxpuqjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eyjsal-du"/><path clip-rule="evenodd" class="kwoxpuqjp"/></g>`,
		"fallback": "solar:lightbulb-minimalistic-bold-duotone",
	});
}

export default Component;
