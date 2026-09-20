import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m4ip4zb8q.css';
import '../../css/y/y7c68_isp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m4ip4zb8q"/><path class="y7c68_isp"/></g>`,
		"fallback": "streamline-sharp:pie-chart",
	});
}

export default Component;
