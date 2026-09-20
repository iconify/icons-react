import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojsfk4b1j.css';
import '../../css/j/j7ju3rbah.css';
import '../../css/e/ew1u15bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ojsfk4b1j"/><path class="j7ju3rbah"/><path class="ew1u15bsk"/></g>`,
		"fallback": "streamline-ultimate-color:shipment-hook",
	});
}

export default Component;
