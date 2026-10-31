import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rno51dg_c.css';
import '../../css/p/p2a3gxecu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rno51dg_c"/><path class="p2a3gxecu"/></g>`,
		"fallback": "coolicons:mail-dot-duotone-round",
	});
}

export default Component;
