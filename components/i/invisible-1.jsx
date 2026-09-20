import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-5puw7gl.css';
import '../../css/p/pu6a48fch.css';
import '../../css/j/jnviqukoj.css';
import '../../css/f/fp_-4-bgw.css';
import '../../css/p/pxp7sebla.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-5puw7gl"/><path class="pu6a48fch"/><path class="jnviqukoj"/><path class="fp_-4-bgw"/><path class="pxp7sebla"/></g>`,
		"fallback": "streamline-flex-color:invisible-1",
	});
}

export default Component;
