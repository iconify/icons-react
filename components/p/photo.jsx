import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k3b8__nse.css';
import '../../css/q/qi52z8b1r.css';
import '../../css/l/le_on8bgi.css';
import '../../css/p/pq_ghj_iw.css';
import '../../css/o/o28jzzbbk.css';
import '../../css/w/wpepxbatt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k3b8__nse"/><path class="qi52z8b1r"/><path clip-rule="evenodd" class="le_on8bgi"/><path class="pq_ghj_iw"/><path clip-rule="evenodd" class="o28jzzbbk"/><path clip-rule="evenodd" class="wpepxbatt"/></g>`,
		"fallback": "pepicons:photo",
	});
}

export default Component;
