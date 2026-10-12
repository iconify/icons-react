import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0qbhmb0w.css';
import '../../css/m/mu90cybeg.css';
import '../../css/w/wyrfambwi.css';
import '../../css/c/cp39r-brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t0qbhmb0w"/><path class="mu90cybeg"/><rect transform="matrix(0 -1 -1 0 16.5 18.78)" class="wyrfambwi"/><path class="cp39r-brl"/></g>`,
		"fallback": "andrsrxn:sim-card",
	});
}

export default Component;
