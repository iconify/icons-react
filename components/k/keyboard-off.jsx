import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tcpw9dbhb.css';
import '../../css/v/vxyzikbdq.css';
import '../../css/v/vx8vwrb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tcpw9dbhb"/><path class="vxyzikbdq"/><path class="vx8vwrb_p"/></g>`,
		"fallback": "hugeicons:keyboard-off",
	});
}

export default Component;
