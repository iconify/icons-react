import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdpjahb5e.css';
import '../../css/n/nynmpdblc.css';
import '../../css/e/etzgkcljo.css';
import '../../css/h/h-vaj-b4v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fdpjahb5e"/><circle class="nynmpdblc"/><circle class="etzgkcljo"/><path class="h-vaj-b4v"/></g>`,
		"fallback": "jam:reddit",
	});
}

export default Component;
