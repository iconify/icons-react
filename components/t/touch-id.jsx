import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4aomtbmc.css';
import '../../css/c/ce_anjbnv.css';
import '../../css/q/qes10601v.css';
import '../../css/e/e0fss5f_y.css';
import '../../css/k/kk2zmxb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r4aomtbmc"/><path class="ce_anjbnv"/><path class="qes10601v"/><path class="e0fss5f_y"/><path class="kk2zmxb6v"/></g>`,
		"fallback": "streamline-ultimate-color:touch-id",
	});
}

export default Component;
