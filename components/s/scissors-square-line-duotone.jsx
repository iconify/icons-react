import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ybxk3_48q.css';
import '../../css/c/cjmcpheaq.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ybxk3_48q"/><path class="cjmcpheaq"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:scissors-square-line-duotone",
	});
}

export default Component;
