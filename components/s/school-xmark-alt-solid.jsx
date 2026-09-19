import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tcawd-b1b.css';
import '../../css/p/psc3whdxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tcawd-b1b"/><path class="psc3whdxx"/></g>`,
		"fallback": "flowbite:school-xmark-alt-solid",
	});
}

export default Component;
