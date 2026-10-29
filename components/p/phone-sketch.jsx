import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mbx10rpve.css';
import '../../css/d/d5ia9zarv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mbx10rpve"/><path class="d5ia9zarv"/></g>`,
		"fallback": "withicons:phone-sketch",
	});
}

export default Component;
