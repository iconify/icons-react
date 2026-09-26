import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xrry15w0o.css';
import '../../css/y/yc1eq-awn.css';
import '../../css/w/wk0dhccfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xrry15w0o"/><path class="yc1eq-awn"/><path class="wk0dhccfa"/></g>`,
		"fallback": "solar:panel-left-open-linear",
	});
}

export default Component;
