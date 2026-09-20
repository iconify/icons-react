import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zt3a3_bve.css';
import '../../css/w/wlttq6b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zt3a3_bve"/><path class="wlttq6b8t"/></g>`,
		"fallback": "keyline-icons:umbrella-sharp-duotone",
	});
}

export default Component;
