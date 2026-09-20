import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8fegtwdl.css';
import '../../css/e/eaye4abxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s8fegtwdl"/><path class="eaye4abxd"/></g>`,
		"fallback": "solar:square-bottom-down-bold",
	});
}

export default Component;
