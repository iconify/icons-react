import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yu01-vf8g.css';
import '../../css/m/mte-ukbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yu01-vf8g"/><path class="mte-ukbwc"/></g>`,
		"fallback": "coolicons:notebook-duotone-round",
	});
}

export default Component;
