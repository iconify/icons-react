import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwo9t4bus.css';
import '../../css/g/gzbbuobpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lwo9t4bus"/><path class="gzbbuobpp"/></g>`,
		"fallback": "reicon:map-point2-filled",
	});
}

export default Component;
