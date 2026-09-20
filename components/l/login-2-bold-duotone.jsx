import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s85eoxbai.css';
import '../../css/p/pqn57v-0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s85eoxbai"/><path clip-rule="evenodd" class="pqn57v-0o"/></g>`,
		"fallback": "solar:login-2-bold-duotone",
	});
}

export default Component;
