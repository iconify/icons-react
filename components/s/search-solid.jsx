import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g68_s5boe.css';
import '../../css/j/jx-sgrbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g68_s5boe"/><path clip-rule="evenodd" class="jx-sgrbwy"/></g>`,
		"fallback": "flowbite:search-solid",
	});
}

export default Component;
