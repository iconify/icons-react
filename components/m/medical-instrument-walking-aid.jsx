import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/r/r19r0vb2u.css';
import '../../css/c/c49qcjbkt.css';
import '../../css/r/r0le27b_q.css';
import '../../css/l/lgc6s8ueu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="r19r0vb2u"/><path class="c49qcjbkt"/><path class="r0le27b_q"/><path class="lgc6s8ueu"/></g>`,
		"fallback": "streamline-ultimate-color:medical-instrument-walking-aid",
	});
}

export default Component;
