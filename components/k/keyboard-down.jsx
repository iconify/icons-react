import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9xmujbmc.css';
import '../../css/u/uc_v_4c1j.css';
import '../../css/w/w-t956ach.css';
import '../../css/i/iaw2oclgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9xmujbmc"/><path class="uc_v_4c1j"/><path class="w-t956ach"/><path class="iaw2oclgf"/></g>`,
		"fallback": "andrsrxn:keyboard-down",
	});
}

export default Component;
