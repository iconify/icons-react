import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8nheneui.css';
import '../../css/r/rypy25fxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f8nheneui"/><path clip-rule="evenodd" class="rypy25fxv"/></g>`,
		"fallback": "solar:ssd-round-bold-duotone",
	});
}

export default Component;
