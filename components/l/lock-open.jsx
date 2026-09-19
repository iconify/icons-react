import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnh0gv09x.css';
import '../../css/s/s-8e16bxy.css';
import '../../css/p/plg_eihxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bnh0gv09x"/><path class="s-8e16bxy"/><path clip-rule="evenodd" class="plg_eihxb"/></g>`,
		"fallback": "pepicons:lock-open",
	});
}

export default Component;
