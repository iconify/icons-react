import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqwr5vbds.css';
import '../../css/u/u1kglwbxs.css';
import '../../css/j/j7_r9pbya.css';
import '../../css/i/il89z2gar.css';
import '../../css/q/q_gvvmbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rqwr5vbds"/><path class="u1kglwbxs"/><path class="j7_r9pbya"/><path class="il89z2gar"/><path class="q_gvvmbci"/></g>`,
		"fallback": "streamline-cyber-color:night-mode",
	});
}

export default Component;
