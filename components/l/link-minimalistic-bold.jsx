import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ar6svccon.css';
import '../../css/l/l0xja2b0d.css';
import '../../css/c/c6yv8di5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ar6svccon"/><path class="l0xja2b0d"/><path class="c6yv8di5i"/></g>`,
		"fallback": "solar:link-minimalistic-bold",
	});
}

export default Component;
