import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcvdmjbdg.css';
import '../../css/n/ni8mupnkh.css';
import '../../css/j/jig8hfb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bcvdmjbdg"/><path class="ni8mupnkh"/><path class="jig8hfb4h"/></g>`,
		"fallback": "heroicons:truck-solid",
	});
}

export default Component;
