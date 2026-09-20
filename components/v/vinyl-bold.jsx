import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-q-o3b4o.css';
import '../../css/g/g2m94pb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-q-o3b4o"/><path clip-rule="evenodd" class="g2m94pb1k"/></g>`,
		"fallback": "solar:vinyl-bold",
	});
}

export default Component;
