import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g61gfabvb.css';
import '../../css/x/xyc-er8fc.css';
import '../../css/q/qr0c7qo6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g61gfabvb"/><path class="xyc-er8fc"/><path class="qr0c7qo6m"/></g>`,
		"fallback": "solar:stream-linear",
	});
}

export default Component;
