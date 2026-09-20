import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rya_tcb8n.css';
import '../../css/s/s1a3ghlbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rya_tcb8n"/><path class="s1a3ghlbz"/></g>`,
		"fallback": "solar:restart-bold-duotone",
	});
}

export default Component;
