import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d__305b4d.css';
import '../../css/f/fbzz2oydx.css';
import '../../css/b/b0wzi4bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d__305b4d"/><path class="fbzz2oydx"/><path class="b0wzi4bgp"/></g>`,
		"fallback": "pixelarticons:reload",
	});
}

export default Component;
