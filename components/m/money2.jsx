import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/v/vhz0i7kxa.css';
import '../../css/i/i-cq7c0se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="vhz0i7kxa"/><path class="i-cq7c0se"/></g>`,
		"fallback": "reicon:money2",
	});
}

export default Component;
