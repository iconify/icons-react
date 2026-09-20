import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krl7oozma.css';
import '../../css/h/hbks_38pg.css';
import '../../css/u/up-ygsbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="krl7oozma"/><circle class="hbks_38pg"/><path class="up-ygsbjv"/></g>`,
		"fallback": "proicons:shield-keyhole",
	});
}

export default Component;
