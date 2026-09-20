import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7y57bcmv.css';
import '../../css/l/lkz8h1lgg.css';
import '../../css/y/y0brb2b7c.css';
import '../../css/n/nous9knry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s7y57bcmv"/><path class="lkz8h1lgg"/><path class="y0brb2b7c"/><path class="nous9knry"/></g>`,
		"fallback": "solar:smartphone-vibration-bold-duotone",
	});
}

export default Component;
