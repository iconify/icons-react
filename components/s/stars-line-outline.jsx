import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwfoszbft.css';
import '../../css/x/xlh4q9b7n.css';
import '../../css/x/xsj74acax.css';
import '../../css/w/wpmbaftjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lwfoszbft"/><path class="xlh4q9b7n"/><path clip-rule="evenodd" class="xsj74acax"/><path clip-rule="evenodd" class="wpmbaftjs"/></g>`,
		"fallback": "solar:stars-line-outline",
	});
}

export default Component;
