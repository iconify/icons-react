import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wou-5tb-x.css';
import '../../css/m/mud2l4bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wou-5tb-x"/><path class="mud2l4bef"/></g>`,
		"fallback": "pixelarticons:settings-2-sharp",
	});
}

export default Component;
