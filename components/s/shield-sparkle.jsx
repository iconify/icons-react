import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9x3o5m7j.css';
import '../../css/q/qbwmvc_ha.css';
import '../../css/e/eadv029kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w9x3o5m7j"/><path class="qbwmvc_ha"/><path class="eadv029kd"/></g>`,
		"fallback": "andrsrxn:shield-sparkle",
	});
}

export default Component;
