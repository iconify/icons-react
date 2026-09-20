import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_s1-ebcg.css';
import '../../css/w/wynvi4b6y.css';
import '../../css/y/yjubbf-wc.css';
import '../../css/n/n5c-z11mf.css';
import '../../css/r/roknq48mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_s1-ebcg"/><path class="wynvi4b6y"/><path class="yjubbf-wc"/><path class="n5c-z11mf"/><path class="roknq48mz"/></g>`,
		"fallback": "solar:thermometer-bold-duotone",
	});
}

export default Component;
