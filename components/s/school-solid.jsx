import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev23zhg3c.css';
import '../../css/y/ynqoe8b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ev23zhg3c"/><path clip-rule="evenodd" class="ynqoe8b6t"/></g>`,
		"fallback": "flowbite:school-solid",
	});
}

export default Component;
