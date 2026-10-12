import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkxl1z-dd.css';
import '../../css/i/ivmaeepqv.css';
import '../../css/g/g5-z37qri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lkxl1z-dd"/><path class="ivmaeepqv"/><path class="g5-z37qri"/></g>`,
		"fallback": "andrsrxn:train-speed-front",
	});
}

export default Component;
