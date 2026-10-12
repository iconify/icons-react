import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueur66_mn.css';
import '../../css/a/ap5y9kb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ueur66_mn"/><path class="ap5y9kb3p"/></g>`,
		"fallback": "andrsrxn:shield",
	});
}

export default Component;
