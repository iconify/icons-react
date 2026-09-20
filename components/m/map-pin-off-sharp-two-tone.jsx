import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uvxt62y7h.css';
import '../../css/p/pxu9ybc-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="uvxt62y7h"/><path class="pxu9ybc-y"/></g>`,
		"fallback": "keyline-icons:map-pin-off-sharp-two-tone",
	});
}

export default Component;
