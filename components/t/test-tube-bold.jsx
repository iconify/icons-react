import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddlk4ceea.css';
import '../../css/z/z14_0gbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ddlk4ceea"/><path class="z14_0gbyd"/></g>`,
		"fallback": "solar:test-tube-bold",
	});
}

export default Component;
