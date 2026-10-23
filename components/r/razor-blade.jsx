import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svlzu1bnz.css';
import '../../css/m/mw_zj7b_f.css';
import '../../css/u/uxz78fn5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="svlzu1bnz"/><path class="mw_zj7b_f"/><path class="uxz78fn5t"/></g>`,
		"fallback": "andrsrxn:razor-blade",
	});
}

export default Component;
