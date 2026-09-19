import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7ohwmb5g.css';
import '../../css/n/n8kjs5jvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m7ohwmb5g"/><path class="n8kjs5jvw"/></g>`,
		"fallback": "heroicons:truck-20-solid",
	});
}

export default Component;
