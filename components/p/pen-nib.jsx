import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_e-g4l5h.css';
import '../../css/l/lbb_3ktva.css';
import '../../css/u/ue8gdp54l.css';
import '../../css/u/ucu96qo_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(.70506 .70915 .70595 -.70827 10.7 4.4)" class="h_e-g4l5h"/><circle transform="rotate(90 9.2 14.88)" class="lbb_3ktva"/><path class="ue8gdp54l"/><path class="ucu96qo_e"/></g>`,
		"fallback": "andrsrxn:pen-nib",
	});
}

export default Component;
