import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqjbkfhng.css';
import '../../css/i/i_xm1xkcl.css';
import '../../css/i/iz7xyshmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uqjbkfhng"/><path class="i_xm1xkcl"/><path class="iz7xyshmm"/></g>`,
		"fallback": "solar:suspension-cross-bold",
	});
}

export default Component;
