import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4kr7db0h.css';
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
		"content": `<g class="k4kr7db0h"><path class="oc0vi5bvd"/><path class="n09t0lk8r"/></g>`,
		"fallback": "iconamoon:location-pin-off-bold",
	});
}

export default Component;
