import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhx05-5_c.css';
import '../../css/i/ig8g_zb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xhx05-5_c"/><path class="ig8g_zb9y"/></g>`,
		"fallback": "coolicons:note-sparkle-corner-duotone-round",
	});
}

export default Component;
