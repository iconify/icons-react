import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/x/xlag7ibmb.css';
import '../../css/t/t31jrybwu.css';
import '../../css/n/njow6lhet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="xlag7ibmb"/><path class="t31jrybwu"/><path class="njow6lhet"/></g>`,
		"fallback": "streamline-sharp-color:reset-clock",
	});
}

export default Component;
