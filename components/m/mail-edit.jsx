import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mlzkn-b2n.css';
import '../../css/f/fdpn8zycp.css';
import '../../css/p/podafsvex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mlzkn-b2n"/><path class="fdpn8zycp"/><path class="podafsvex"/></g>`,
		"fallback": "andrsrxn:mail-edit",
	});
}

export default Component;
