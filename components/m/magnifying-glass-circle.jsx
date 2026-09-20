import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_twqcb8v.css';
import '../../css/o/o682i_8-s.css';
import '../../css/o/ol--9d_nl.css';
import '../../css/l/lctwt5bza.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j_twqcb8v"/><path class="o682i_8-s"/><path class="ol--9d_nl"/><path class="lctwt5bza"/></g>`,
		"fallback": "streamline-color:magnifying-glass-circle",
	});
}

export default Component;
