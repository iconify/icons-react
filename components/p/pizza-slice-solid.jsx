import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojptho1mk.css';
import '../../css/s/suvynfbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ojptho1mk"/><path clip-rule="evenodd" class="suvynfbqh"/></g>`,
		"fallback": "flowbite:pizza-slice-solid",
	});
}

export default Component;
