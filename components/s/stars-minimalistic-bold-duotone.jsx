import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nsf4icv8b.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jqsfrz9lo.css';
import '../../css/h/hd4nyobgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nsf4icv8b"/><g class="mc2zb0bvp"><path class="jqsfrz9lo"/><path class="hd4nyobgw"/></g></g>`,
		"fallback": "solar:stars-minimalistic-bold-duotone",
	});
}

export default Component;
