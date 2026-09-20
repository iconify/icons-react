import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y5rhuefdb.css';
import '../../css/y/yvw1a2brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y5rhuefdb"/><path class="yvw1a2brr"/></g>`,
		"fallback": "keyline-icons:ship-sharp-two-tone",
	});
}

export default Component;
