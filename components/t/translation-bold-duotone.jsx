import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7yvnob1w.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/yiruukb8q.css';
import '../../css/l/lc80znbzq.css';
import '../../css/s/slwcshstv.css';
import '../../css/p/p0cyqhbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7yvnob1w"/><g class="mc2zb0bvp"><path class="yiruukb8q"/><path class="lc80znbzq"/><path class="slwcshstv"/><path class="p0cyqhbjh"/></g></g>`,
		"fallback": "solar:translation-bold-duotone",
	});
}

export default Component;
