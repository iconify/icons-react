import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f45sxnr3p.css';
import '../../css/b/b_kxgsbxs.css';
import '../../css/t/t1a7ogbfo.css';
import '../../css/r/rw46_7qww.css';
import '../../css/s/s3t1q3b_c.css';
import '../../css/j/jpypiqnpm.css';
import '../../css/c/ckaoc5wxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f45sxnr3p"/><path class="b_kxgsbxs"/><path class="t1a7ogbfo"/><path class="rw46_7qww"/><path class="s3t1q3b_c"/><path class="jpypiqnpm"/><path clip-rule="evenodd" class="ckaoc5wxh"/></g>`,
		"fallback": "solar:shield-network-bold",
	});
}

export default Component;
