import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrq6ytbpv.css';
import '../../css/p/phos4thmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qrq6ytbpv"/><path class="phos4thmt"/></g>`,
		"fallback": "lets-icons:ito-fill",
	});
}

export default Component;
