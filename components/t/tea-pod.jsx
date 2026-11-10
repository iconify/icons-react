import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxxaractw.css';
import '../../css/g/gt2zmdbsc.css';
import '../../css/a/adzk65bga.css';
import '../../css/c/cfqdmgbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vxxaractw"/><path class="gt2zmdbsc"/><path clip-rule="evenodd" class="adzk65bga"/><path class="cfqdmgbtv"/></g>`,
		"fallback": "andrsrxn:tea-pod",
	});
}

export default Component;
