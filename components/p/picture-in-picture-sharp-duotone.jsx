import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ose1lsbtw.css';
import '../../css/h/hfu1j8bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ose1lsbtw"/><path class="hfu1j8bzf"/></g>`,
		"fallback": "keyline-icons:picture-in-picture-sharp-duotone",
	});
}

export default Component;
