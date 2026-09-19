import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mm9qf3b4s.css';
import '../../css/a/axfh34b7v.css';
import '../../css/h/h79p-zbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mm9qf3b4s"/><path class="axfh34b7v"/><path class="h79p-zbnw"/></g>`,
		"fallback": "flowbite:person-chalkboard-solid",
	});
}

export default Component;
