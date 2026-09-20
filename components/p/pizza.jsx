import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j34y3d5_z.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-mr21bme.css';
import '../../css/o/otj2g5hbk.css';
import '../../css/f/fzo49hb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGt7ktWqcX" width="20" height="16" x="2" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="j34y3d5_z"/></mask><g class="ft5dv1b6b"><path class="e-mr21bme"/><path class="otj2g5hbk"/><g mask="url(#SVGt7ktWqcX)"><path clip-rule="evenodd" class="fzo49hb8k"/></g></g>`,
		"fallback": "lets-icons:pizza",
	});
}

export default Component;
