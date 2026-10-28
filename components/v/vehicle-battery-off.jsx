import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbxe9t4ta.css';
import '../../css/i/irbjmcycn.css';
import '../../css/r/rc_n7n1qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xbxe9t4ta"/><rect class="irbjmcycn"/><path class="rc_n7n1qz"/></g>`,
		"fallback": "andrsrxn:vehicle-battery-off",
	});
}

export default Component;
