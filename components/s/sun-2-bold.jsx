import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kz_jmngoy.css';
import '../../css/n/nirlhkrao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kz_jmngoy"/><path clip-rule="evenodd" class="nirlhkrao"/></g>`,
		"fallback": "solar:sun-2-bold",
	});
}

export default Component;
