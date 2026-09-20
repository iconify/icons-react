import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/woph2abqr.css';
import '../../css/f/fedm_ccnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="woph2abqr"/><path class="fedm_ccnd"/></g>`,
		"fallback": "si:map-duotone",
	});
}

export default Component;
