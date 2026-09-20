import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5dwlab5o.css';
import '../../css/z/zixwbkb_n.css';
import '../../css/l/ldmszqb6p.css';
import '../../css/s/s_dqdm86k.css';
import '../../css/e/esi2yacxp.css';
import '../../css/j/jev2w3bke.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/c/cmwegkbus.css';
import '../../css/c/cm945khqc.css';
import '../../css/m/mt0b9co6o.css';
import '../../css/p/pmbws3rip.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5dwlab5o"/><circle class="zixwbkb_n"/><circle class="ldmszqb6p"/><path class="s_dqdm86k"/><path class="esi2yacxp"/><path class="jev2w3bke"/><g class="ij2x_72vy"><path class="cmwegkbus"/><circle class="cm945khqc"/><circle class="mt0b9co6o"/><path class="pmbws3rip"/></g>`,
		"fallback": "openmoji:minibus",
	});
}

export default Component;
