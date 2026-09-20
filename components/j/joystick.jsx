import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmvau2bwb.css';
import '../../css/q/qu_srn2lk.css';
import '../../css/t/t5n-ewb4i.css';
import '../../css/m/m57dlxb7p.css';
import '../../css/u/uscsq3vrv.css';
import '../../css/x/xd85tkbhm.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/pxrcutboa.css';
import '../../css/m/mk8efqm7z.css';
import '../../css/h/hpabh8d3w.css';
import '../../css/f/f82olsxyb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmvau2bwb"/><circle class="qu_srn2lk"/><path class="t5n-ewb4i"/><path class="m57dlxb7p"/><path class="uscsq3vrv"/><path class="xd85tkbhm"/><g class="brzn_0bpr"><path class="pxrcutboa"/><path class="mk8efqm7z"/><path class="hpabh8d3w"/><circle class="f82olsxyb"/></g>`,
		"fallback": "openmoji:joystick",
	});
}

export default Component;
