import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd8-74g_c.css';
import '../../css/w/wo02xv49a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hd8-74g_c"/><path class="wo02xv49a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:leopard",
	});
}

export default Component;
