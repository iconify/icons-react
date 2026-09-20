import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/arzno-wyz.css';
import '../../css/o/o_taswthd.css';
import '../../css/c/cwc236bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="arzno-wyz"/><path class="o_taswthd"/><path class="cwc236bjm"/></g>`,
		"fallback": "solar:link-minimalistic-line-duotone",
	});
}

export default Component;
