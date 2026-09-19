import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7t0vhbyz.css';
import '../../css/x/xnx6lwbqt.css';
import '../../css/x/xy6-dl1rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z7t0vhbyz"/><path class="xnx6lwbqt"/><path class="xy6-dl1rb"/></g>`,
		"fallback": "flowbite:school-check-alt-solid",
	});
}

export default Component;
