import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yda1e5bll.css';
import '../../css/p/poozqqe-x.css';
import '../../css/d/dle3e5bxo.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yda1e5bll"/><path class="poozqqe-x"/><path class="dle3e5bxo"/></g>`,
		"fallback": "jam:sitemap-f",
	});
}

export default Component;
