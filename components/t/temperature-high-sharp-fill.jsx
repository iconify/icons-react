import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dmbjsgbay.css';
import '../../css/c/cr_ndv8ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dmbjsgbay"/><path class="cr_ndv8ed"/></g>`,
		"fallback": "keyline-icons:temperature-high-sharp-fill",
	});
}

export default Component;
