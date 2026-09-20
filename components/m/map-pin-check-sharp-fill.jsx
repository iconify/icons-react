import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r5t8hmb9s.css';
import '../../css/h/hqhuvccbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="r5t8hmb9s"/><path class="hqhuvccbb"/></g>`,
		"fallback": "keyline-icons:map-pin-check-sharp-fill",
	});
}

export default Component;
