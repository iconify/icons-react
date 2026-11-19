import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/v/v0m19fyab.css';
import '../../css/b/bwcc2v1fm.css';
import '../../css/h/h27vhbcct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="v0m19fyab"/><path class="bwcc2v1fm"/><circle class="h27vhbcct"/></g>`,
		"fallback": "andrsrxn:reload-circle",
	});
}

export default Component;
