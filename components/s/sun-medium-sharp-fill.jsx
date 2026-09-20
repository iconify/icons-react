import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v49pi3bmt.css';
import '../../css/o/odmsiccqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v49pi3bmt"/><path class="odmsiccqr"/></g>`,
		"fallback": "keyline-icons:sun-medium-sharp-fill",
	});
}

export default Component;
