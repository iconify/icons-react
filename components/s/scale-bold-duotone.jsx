import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/r/rai3dy9mq.css';
import '../../css/t/t9_6kiyei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjq2qh_fp"/><path class="rai3dy9mq"/><path class="t9_6kiyei"/></g>`,
		"fallback": "solar:scale-bold-duotone",
	});
}

export default Component;
