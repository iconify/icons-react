import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dwosq7njg.css';
import '../../css/c/c9mj3hkpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dwosq7njg"/><path class="c9mj3hkpv"/></g>`,
		"fallback": "withicons:user-circle-sketch",
	});
}

export default Component;
