import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_tl4myur.css';
import '../../css/e/ev65-6bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i_tl4myur"/><path class="ev65-6bae"/></g>`,
		"fallback": "reicon:satellite-duotone",
	});
}

export default Component;
