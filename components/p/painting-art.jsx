import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ew-6i_b8i.css';
import '../../css/j/juu81ymdv.css';
import '../../css/e/eugzhgbgo.css';
import '../../css/g/gdb003btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ew-6i_b8i"/><path clip-rule="evenodd" class="juu81ymdv"/><path class="eugzhgbgo"/><path class="gdb003btj"/></g>`,
		"fallback": "andrsrxn:painting-art",
	});
}

export default Component;
