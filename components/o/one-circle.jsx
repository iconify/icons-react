import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/h/h27vhbcct.css';
import '../../css/h/h6kvn-bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><circle class="h27vhbcct"/><path class="h6kvn-bip"/></g>`,
		"fallback": "andrsrxn:one-circle",
	});
}

export default Component;
