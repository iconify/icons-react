import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h0oi9ihsm.css';
import '../../css/w/ww1pcf4xt.css';
import '../../css/h/hlg2s0jjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h0oi9ihsm"/><path class="ww1pcf4xt"/><path class="hlg2s0jjq"/></g>`,
		"fallback": "withicons:message-square-sketch",
	});
}

export default Component;
