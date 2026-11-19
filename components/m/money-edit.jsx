import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8u0qxo9y.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/y/y6st1_mgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m8u0qxo9y"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="y6st1_mgi"/></g>`,
		"fallback": "andrsrxn:money-edit",
	});
}

export default Component;
