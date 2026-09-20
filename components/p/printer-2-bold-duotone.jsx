import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jj84z2b8x.css';
import '../../css/s/s7ajzb_1q.css';
import '../../css/n/ng0k-9szg.css';
import '../../css/d/d-beq0ypp.css';
import '../../css/c/cf_t_kbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jj84z2b8x"/><path class="s7ajzb_1q"/><path class="ng0k-9szg"/><path class="d-beq0ypp"/><path class="cf_t_kbhb"/></g>`,
		"fallback": "solar:printer-2-bold-duotone",
	});
}

export default Component;
