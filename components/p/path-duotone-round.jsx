import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c856fpvcp.css';
import '../../css/m/mtkwm5czr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c856fpvcp"/><path class="mtkwm5czr"/></g>`,
		"fallback": "coolicons:path-duotone-round",
	});
}

export default Component;
