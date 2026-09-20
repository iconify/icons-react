import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j6kci6b1r.css';
import '../../css/d/dts229i3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j6kci6b1r"/><path class="dts229i3j"/></g>`,
		"fallback": "solar:pulse-2-bold-duotone",
	});
}

export default Component;
