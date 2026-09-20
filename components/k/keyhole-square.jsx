import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u55m8obaw.css';
import '../../css/q/q132egrad.css';
import '../../css/c/c_m8emxgs.css';
import '../../css/m/mu0ml18bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u55m8obaw"/><path class="q132egrad"/><path class="c_m8emxgs"/><path class="mu0ml18bv"/></g>`,
		"fallback": "streamline-ultimate-color:keyhole-square",
	});
}

export default Component;
