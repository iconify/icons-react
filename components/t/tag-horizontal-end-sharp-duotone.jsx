import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wpwt_zkck.css';
import '../../css/e/e89p18b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wpwt_zkck"/><path class="e89p18b1c"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end-sharp-duotone",
	});
}

export default Component;
