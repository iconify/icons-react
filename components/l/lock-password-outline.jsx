import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/acg8t5b_l.css';
import '../../css/a/ay1qmvbxn.css';
import '../../css/a/a5du-9wed.css';
import '../../css/q/q6hj83b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="acg8t5b_l"/><path class="ay1qmvbxn"/><path class="a5du-9wed"/><path clip-rule="evenodd" class="q6hj83b4a"/></g>`,
		"fallback": "solar:lock-password-outline",
	});
}

export default Component;
