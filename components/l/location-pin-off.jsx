import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/oc0vi5bvd.css';
import '../../css/n/n09t0lk8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="oc0vi5bvd"/><path class="n09t0lk8r"/></g>`,
		"fallback": "iconamoon:location-pin-off",
	});
}

export default Component;
