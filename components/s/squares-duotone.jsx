import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dicbf-s8h.css';
import '../../css/r/rlibz_uqk.css';
import '../../css/u/u-mp0ou6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="dicbf-s8h"/><path class="rlibz_uqk"/><path class="u-mp0ou6v"/></g>`,
		"fallback": "reicon:squares-duotone",
	});
}

export default Component;
