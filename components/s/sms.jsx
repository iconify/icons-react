import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/v/vhz0i7kxa.css';
import '../../css/k/k_fmhwxlq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="vhz0i7kxa"/><path class="k_fmhwxlq"/></g>`,
		"fallback": "reicon:sms",
	});
}

export default Component;
