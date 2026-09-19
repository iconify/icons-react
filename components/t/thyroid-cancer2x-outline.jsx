import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drag34b7r.css';
import '../../css/z/zptsp1bsp.css';
import '../../css/a/a996sxbjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="drag34b7r"/><path class="zptsp1bsp"/><path clip-rule="evenodd" class="a996sxbjg"/></g>`,
		"fallback": "healthicons:thyroid-cancer2x-outline",
	});
}

export default Component;
