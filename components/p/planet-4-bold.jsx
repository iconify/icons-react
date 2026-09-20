import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/baks0vicm.css';
import '../../css/e/ev8ugkd_t.css';
import '../../css/d/dvwuemy6j.css';
import '../../css/j/jq9k3yb_w.css';
import '../../css/t/t8c8lgbwt.css';
import '../../css/h/ha57j35ad.css';
import '../../css/r/rt4-gjbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="baks0vicm"/><path class="ev8ugkd_t"/><path class="dvwuemy6j"/><path class="jq9k3yb_w"/><path class="t8c8lgbwt"/><path class="ha57j35ad"/><path class="rt4-gjbpg"/></g>`,
		"fallback": "solar:planet-4-bold",
	});
}

export default Component;
