import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
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
		"content": `<g class="jx0p4fbya"><path class="xlag7ibmb"/><path class="t31jrybwu"/><path class="njow6lhet"/></g>`,
		"fallback": "streamline-sharp:reset-clock",
	});
}

export default Component;
