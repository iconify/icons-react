import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m87krecbd.css';
import '../../css/e/eoc91lb1z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m87krecbd"/><path class="eoc91lb1z"/></g>`,
		"fallback": "cryptocurrency-color:stak",
	});
}

export default Component;
