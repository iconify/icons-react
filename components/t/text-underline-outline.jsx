import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kob28e7vh.css';
import '../../css/s/sl4dddbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kob28e7vh"/><path class="sl4dddbgd"/></g>`,
		"fallback": "solar:text-underline-outline",
	});
}

export default Component;
