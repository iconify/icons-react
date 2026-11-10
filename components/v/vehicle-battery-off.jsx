import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9_hkt5ij.css';
import '../../css/z/z2dxdmc7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9_hkt5ij"/><path class="z2dxdmc7m"/></g>`,
		"fallback": "andrsrxn:vehicle-battery-off",
	});
}

export default Component;
