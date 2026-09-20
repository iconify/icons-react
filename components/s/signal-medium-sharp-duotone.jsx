import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m1z-ndv6m.css';
import '../../css/m/mxuiqbdgj.css';
import '../../css/l/lj14h_baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m1z-ndv6m"/><path class="mxuiqbdgj"/><path class="lj14h_baz"/></g>`,
		"fallback": "keyline-icons:signal-medium-sharp-duotone",
	});
}

export default Component;
