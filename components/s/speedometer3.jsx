import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/b/b6tpc2b7x.css';
import '../../css/t/tmv8u2bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="b6tpc2b7x"/><path class="tmv8u2bgt"/></g>`,
		"fallback": "reicon:speedometer3",
	});
}

export default Component;
