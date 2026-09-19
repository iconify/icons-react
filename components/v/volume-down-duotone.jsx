import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p96kp1t6i.css';
import '../../css/r/r2n7k2ben.css';
import '../../css/i/ixfa9wv2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p96kp1t6i"/><path class="r2n7k2ben"/><path class="ixfa9wv2o"/></g>`,
		"fallback": "iconamoon:volume-down-duotone",
	});
}

export default Component;
