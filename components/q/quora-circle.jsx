import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-f_sqb8q.css';
import '../../css/a/aicw3bbuy.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-f_sqb8q"/><path class="aicw3bbuy"/></g>`,
		"fallback": "jam:quora-circle",
	});
}

export default Component;
