import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-ue3i7gb.css';
import '../../css/l/lt2o0fucg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-ue3i7gb"/><path class="lt2o0fucg"/></g>`,
		"fallback": "andrsrxn:phone-vibrate",
	});
}

export default Component;
