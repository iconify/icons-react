import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/t/t514adc2z.css';
import '../../css/t/t0wfrbc8i.css';
import '../../css/r/rg_jzibtf.css';
import '../../css/u/uoo0rzbqs.css';
import '../../css/j/jg2vmvbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuose96rb"/><path class="t514adc2z"/><path class="t0wfrbc8i"/><path class="rg_jzibtf"/><path class="uoo0rzbqs"/><path class="jg2vmvbny"/></g>`,
		"fallback": "solar:scanner-2-bold-duotone",
	});
}

export default Component;
