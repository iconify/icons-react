import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jz49k7tbl.css';
import '../../css/f/fhp4kcffd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jz49k7tbl"/><path class="fhp4kcffd"/></g>`,
		"fallback": "streamline-color:tidal-wave",
	});
}

export default Component;
