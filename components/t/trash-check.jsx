import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgrts9b0u.css';
import '../../css/i/in3ko8b4i.css';
import '../../css/v/vuu5r_dhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sgrts9b0u"/><path class="in3ko8b4i"/><path class="vuu5r_dhp"/></g>`,
		"fallback": "andrsrxn:trash-check",
	});
}

export default Component;
