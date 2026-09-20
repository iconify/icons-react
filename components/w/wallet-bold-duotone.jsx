import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dibkieblx.css';
import '../../css/o/o8xahkwga.css';
import '../../css/v/vhl0zkx6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dibkieblx"/><path class="o8xahkwga"/><path class="vhl0zkx6a"/></g>`,
		"fallback": "solar:wallet-bold-duotone",
	});
}

export default Component;
