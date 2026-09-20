import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k9geu4jfq.css';
import '../../css/y/ymfrb8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k9geu4jfq"/><path class="ymfrb8bxt"/></g>`,
		"fallback": "solar:like-bold",
	});
}

export default Component;
