import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/csm16okln.css';
import '../../css/e/e-2ns768c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="csm16okln"/><path class="e-2ns768c"/></g>`,
		"fallback": "keyline-icons:podium-3-sharp-duotone",
	});
}

export default Component;
