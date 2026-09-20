import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1p3t8x8f.css';
import '../../css/l/l-g6_fbox.css';
import '../../css/i/i3khix54k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n1p3t8x8f"/><path class="l-g6_fbox"/><path clip-rule="evenodd" class="i3khix54k"/></g>`,
		"fallback": "solar:user-check-rounded-outline",
	});
}

export default Component;
