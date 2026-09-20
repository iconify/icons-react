import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/si1cz-b_m.css';
import '../../css/d/d3gb1uvps.css';
import '../../css/i/i4o9y09nw.css';
import '../../css/l/lfxab_yhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="si1cz-b_m"/><path class="d3gb1uvps"/><path clip-rule="evenodd" class="i4o9y09nw"/><path class="lfxab_yhr"/></g>`,
		"fallback": "nrk:smart-speaker",
	});
}

export default Component;
